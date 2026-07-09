const express = require("express");
const crypto = require("crypto");
const Razorpay = require("razorpay");
const { body, validationResult } = require("express-validator");

const Registration = require("./registration");
const { getPlan, toPaise, CURRENCY } = require("./plan");
const { createOrderLimiter, verifyPaymentLimiter } = require("./ratelimiter");

const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ---------------------------------------------------------------------
// POST /api/payment/create-order
// Client sends form details + chosen category. We look up the real
// price server-side, create a Razorpay order, and store a "created"
// registration row. Nothing is considered paid yet.
// ---------------------------------------------------------------------
router.post(
    "/create-order",
    createOrderLimiter,
    [
        body("name").trim().notEmpty().isLength({ max: 120 }).escape(),
        body("email").trim().isEmail().normalizeEmail(),
        body("affiliation").trim().notEmpty().isLength({ max: 200 }).escape(),
        body("country").trim().notEmpty().isLength({ max: 100 }).escape(),
        body("category").trim().isIn(["ugpg", "scholar", "regular"]),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: "Invalid input", details: errors.array() });
        }

        try {
            const { name, email, affiliation, country, category } = req.body;

            const plan = getPlan(category);
            if (!plan) {
                return res.status(400).json({ error: "Invalid registration category" });
            }

            const amountPaise = toPaise(plan.amountInRupees);

            // Razorpay order receipts must be <= 40 chars
            const receipt = `reg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

            const order = await razorpay.orders.create({
                amount: amountPaise,
                currency: CURRENCY,
                receipt,
                notes: { email, category },
            });

            const registration = await Registration.create({
                name,
                email,
                affiliation,
                country,
                category,
                amount: plan.amountInRupees,
                currency: CURRENCY,
                razorpayOrderId: order.id,
                paymentStatus: "created",
            });

            // Only send the public key + order info to the client.
            // key_secret never leaves the server.
            return res.status(201).json({
                orderId: order.id,
                amount: order.amount,
                currency: order.currency,
                keyId: process.env.RAZORPAY_KEY_ID,
                registrationId: registration._id,
                planLabel: plan.label,
            });
        } catch (err) {
            console.error("[create-order] error:", err.message);
            return res.status(500).json({ error: "Could not create payment order. Please try again." });
        }
    }
);

// ---------------------------------------------------------------------
// POST /api/payment/verify
// Called by the frontend immediately after Razorpay Checkout returns.
// This is what actually confirms payment: we recompute the HMAC
// signature server-side using the secret key and compare it against
// what the client sent. If it doesn't match, the payment is rejected
// and nothing is marked paid, regardless of what the client claims.
// ---------------------------------------------------------------------
router.post(
    "/verify",
    verifyPaymentLimiter,
    [
        body("razorpay_order_id").trim().notEmpty(),
        body("razorpay_payment_id").trim().notEmpty(),
        body("razorpay_signature").trim().notEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: "Invalid input" });
        }

        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

            const expectedSignature = crypto
                .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                .digest("hex");

            const isValid =
                expectedSignature.length === razorpay_signature.length &&
                crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(razorpay_signature));

            if (!isValid) {
                await Registration.updateOne(
                    { razorpayOrderId: razorpay_order_id },
                    { $set: { paymentStatus: "failed" } }
                );
                return res.status(400).json({ error: "Payment verification failed." });
            }

            const registration = await Registration.findOneAndUpdate(
                { razorpayOrderId: razorpay_order_id },
                {
                    $set: {
                        paymentStatus: "paid",
                        razorpayPaymentId: razorpay_payment_id,
                        razorpaySignature: razorpay_signature,
                    },
                },
                { new: true }
            );

            if (!registration) {
                return res.status(404).json({ error: "Registration not found for this order." });
            }

            return res.status(200).json({
                success: true,
                message: "Payment verified and registration confirmed.",
                registrationId: registration._id,
            });
        } catch (err) {
            console.error("[verify] error:", err.message);
            return res.status(500).json({ error: "Verification failed. Please contact support." });
        }
    }
);

// ---------------------------------------------------------------------
// POST /api/payment/webhook
// Razorpay calls this server-to-server. This is the source of truth
// fallback: even if a user closes their browser right after paying
// (before /verify runs), the webhook still marks the registration paid.
// Must be mounted with express.raw() (see server.js) so we can verify
// the signature against the exact raw request body.
// ---------------------------------------------------------------------
router.post("/webhook", async (req, res) => {
    try {
        const signature = req.headers["x-razorpay-signature"];
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (!signature || !secret) {
            return res.status(400).send("Missing signature or webhook secret");
        }

        const expected = crypto.createHmac("sha256", secret).update(req.body).digest("hex");

        const isValid =
            expected.length === signature.length &&
            crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

        if (!isValid) {
            return res.status(400).send("Invalid webhook signature");
        }

        const payload = JSON.parse(req.body.toString("utf8"));

        if (payload.event === "payment.captured") {
            const paymentEntity = payload.payload.payment.entity;
            await Registration.updateOne(
                { razorpayOrderId: paymentEntity.order_id },
                {
                    $set: {
                        paymentStatus: "paid",
                        razorpayPaymentId: paymentEntity.id,
                    },
                }
            );
        }

        if (payload.event === "payment.failed") {
            const paymentEntity = payload.payload.payment.entity;
            await Registration.updateOne(
                { razorpayOrderId: paymentEntity.order_id },
                { $set: { paymentStatus: "failed" } }
            );
        }

        return res.status(200).send("ok");
    } catch (err) {
        console.error("[webhook] error:", err.message);
        return res.status(500).send("Webhook processing error");
    }
});

module.exports = router;
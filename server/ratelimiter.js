const rateLimit = require("express-rate-limit");

// Applied to order creation — prevents someone from spamming Razorpay
// order creation (which costs nothing to Razorpay but can be used to
// enumerate/spam your DB with "created" records).
const createOrderLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many attempts. Please try again in a few minutes." },
});

// Slightly more generous for verification, since a legit user may retry
// after a flaky network response.
const verifyPaymentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many attempts. Please try again in a few minutes." },
});

module.exports = { createOrderLimiter, verifyPaymentLimiter };
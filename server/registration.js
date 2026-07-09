const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 254,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
            index: true,
        },
        affiliation: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
        },
        country: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        category: {
            type: String,
            required: true,
            enum: ["ugpg", "scholar", "regular"], // whitelist — rejects anything else at the DB layer too
        },
        amount: {
            // stored in rupees for readability; always set server-side from PLANS, never from client input
            type: Number,
            required: true,
            min: 1,
        },
        currency: {
            type: String,
            required: true,
            default: "INR",
        },
        razorpayOrderId: {
            type: String,
            required: true,
            unique: true, // prevents duplicate order records
            index: true,
        },
        razorpayPaymentId: {
            type: String,
            default: null,
        },
        razorpaySignature: {
            type: String,
            default: null,
            select: false, // never returned in normal queries
        },
        paymentStatus: {
            type: String,
            enum: ["created", "paid", "failed"],
            default: "created",
            index: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Registration", registrationSchema);
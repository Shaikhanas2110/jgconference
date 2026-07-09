require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");

const connectDB = require("./db");
const paymentRoutes = require("./payment");

const REQUIRED_ENV = [
    "MONGODB_URI",
    "RAZORPAY_KEY_ID",
    "RAZORPAY_KEY_SECRET",
    "RAZORPAY_WEBHOOK_SECRET",
    "ALLOWED_ORIGINS",
];

for (const key of REQUIRED_ENV) {
    if (!process.env[key]) {
        console.error(`[startup] Missing required env var: ${key}`);
        process.exit(1);
    }
}

const app = express();

app.set("trust proxy", 1);

app.use(helmet());

// --- CORS: only allow the exact configured frontend origin(s) ---
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
app.use(
    cors({
        origin: (origin, callback) => {
            // allow same-origin / server-to-server requests with no origin header
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("Not allowed by CORS"));
        },
        methods: ["GET", "POST"],
    })
);

// --- Logging (skip in test env) ---
if (process.env.NODE_ENV !== "test") {
    app.use(morgan("combined"));
}

app.use("/api/payment/webhook", express.raw({ type: "application/json" }));

// --- Body parsing (with a sane size limit) for all other routes ---
app.use(express.json({ limit: "20kb" }));

// --- Strip any keys starting with $ or containing . to block NoSQL injection ---
app.use(mongoSanitize());

// --- Routes ---
app.use("/api/payment", paymentRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

// --- 404 handler ---
app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

// --- Generic error handler: never leak stack traces to the client ---
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("[error]", err.message);
    if (err.message === "Not allowed by CORS") {
        return res.status(403).json({ error: "Origin not allowed" });
    }
    res.status(500).json({ error: "Something went wrong. Please try again." });
});

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`[server] Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("[startup] Failed to connect to MongoDB:", err.message);
        process.exit(1);
    });
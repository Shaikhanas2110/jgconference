const mongoose = require("mongoose");

async function connectDB() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("MONGODB_URI is not set. Check your .env file.");
    }

    mongoose.set("strictQuery", true); // reject fields not defined in schema

    await mongoose.connect(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
    });

    console.log("[db] Connected to MongoDB Atlas");

    mongoose.connection.on("error", (err) => {
        console.error("[db] Connection error:", err.message);
    });
}

module.exports = connectDB;
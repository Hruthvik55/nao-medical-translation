const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const chatRoutes = require("./routes/chat.routes");
const conversationRoutes = require("./routes/conversation.routes");
const audioRoutes = require("./routes/audio.routes");

const app = express(); // ✅ app must be created FIRST

// Middleware
app.use(cors());
app.use(express.json());

// Static files for audio
app.use("/uploads", express.static("src/uploads"));

// DB connection
connectDB();

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/audio", audioRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Nao Medical API running" });
});

module.exports = app;

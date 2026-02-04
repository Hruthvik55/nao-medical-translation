const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    senderRole: {
      type: String,
      enum: ["doctor", "patient"],
      required: true,
    },
    originalText: {
      type: String,
    },
    translatedText: {
      type: String,
    },
    audioUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);

const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const { translateText } = require("../services/translation.service");

const sendMessage = async (req, res) => {
  try {
    const {
      conversationId,
      senderRole,
      text,
      sourceLanguage,
      targetLanguage,
    } = req.body;

    // Translate text
    const translatedText = await translateText({
      text,
      sourceLanguage,
      targetLanguage,
    });

    // Save message
    const message = await Message.create({
      conversationId,
      senderRole,
      originalText: text,
      translatedText,
    });

    res.status(201).json(message);
  } catch (error) {
    console.error("Send message error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { sendMessage };

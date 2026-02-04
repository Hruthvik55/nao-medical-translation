const Conversation = require("../models/Conversation");

const createConversation = async (req, res) => {
  try {
    const { patientLanguage } = req.body;

    const conversation = await Conversation.create({
      patientLanguage,
    });

    res.status(201).json(conversation);
  } catch (error) {
    console.error("Create conversation error:", error);
    res.status(500).json({ error: "Failed to create conversation" });
  }
};

module.exports = { createConversation };

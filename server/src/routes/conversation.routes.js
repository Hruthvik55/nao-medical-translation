const express = require("express");
const router = express.Router();

const {
  createConversation,
} = require("../controllers/conversation.controller");

// Create a new conversation
router.post("/", createConversation);

module.exports = router;

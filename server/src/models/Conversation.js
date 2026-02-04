const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    doctorLanguage: {
      type: String,
      default: "en",
    },
    patientLanguage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", conversationSchema);

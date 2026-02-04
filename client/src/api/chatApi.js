const API_BASE_URL = "http://localhost:5000/api";

// Create a new conversation
export const createConversation = async (patientLanguage) => {
  const res = await fetch(`${API_BASE_URL}/conversations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ patientLanguage }),
  });

  return res.json();
};

// Send a message
export const sendMessage = async ({
  conversationId,
  senderRole,
  text,
  sourceLanguage,
  targetLanguage,
}) => {
  const res = await fetch(`${API_BASE_URL}/chat/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversationId,
      senderRole,
      text,
      sourceLanguage,
      targetLanguage,
    }),
  });

  return res.json();
};

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

function ChatWindow({ conversationId }) {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "720px",
        margin: "0 auto",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>Conversation</h3>

      {/* Messages container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingRight: "6px",
          marginBottom: "16px",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: "#666" }}>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <MessageBubble
              key={index}
              role={msg.senderRole}
              text={msg.translatedText}
              audioUrl={msg.audioUrl}
            />
          ))
        )}
      </div>

      {/* Input */}
      <MessageInput
        conversationId={conversationId}
        onNewMessage={handleNewMessage}
      />
    </div>
  );
}

export default ChatWindow;

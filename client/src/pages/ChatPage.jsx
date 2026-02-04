import { useEffect, useState } from "react";
import { createConversation } from "../api/chatApi";
import ChatWindow from "../components/Chat/ChatWindow";

function ChatPage() {
  const [conversationId, setConversationId] = useState(null);

  useEffect(() => {
    const startConversation = async () => {
      try {
        const conversation = await createConversation("hi");
        setConversationId(conversation._id);
      } catch (error) {
        console.error("Failed to create conversation", error);
      }
    };

    startConversation();
  }, []);

  return (
    <div style={{ width: "100%", padding: "40px 0" }}>
 <h1
  style={{
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
  }}
>
   MedBridge — Real-Time Medical Translation
</h1>


      {conversationId ? (
        <ChatWindow conversationId={conversationId} />
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>
          Initializing secure medical session…
        </p>
      )}
    </div>
  );
}

export default ChatPage;

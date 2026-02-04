function MessageBubble({ role, text, audioUrl }) {
  const isDoctor = role === "doctor";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isDoctor ? "flex-end" : "flex-start",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          padding: "12px 14px",
          borderRadius: "14px",
          background: isDoctor ? "#e3f2fd" : "#e8f5e9",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: "600",
            marginBottom: "4px",
            color: "#555",
          }}
        >
          {isDoctor ? "Doctor" : "Patient"}
        </div>

        {text && <div style={{ marginBottom: audioUrl ? "8px" : "0" }}>{text}</div>}

        {audioUrl && (
          <audio
            controls
            style={{ width: "100%" }}
            src={`http://localhost:5000${audioUrl}`}
          />
        )}
      </div>
    </div>
  );
}

export default MessageBubble;

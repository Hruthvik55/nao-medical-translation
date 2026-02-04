import { useState } from "react";
import { sendMessage } from "../../api/chatApi";
import AudioRecorder from "../Audio/AudioRecorder";

/* ---------- Styles ---------- */

const controlStyle = {
  padding: "8px 12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
  backgroundColor: "#fff",
  cursor: "pointer",
  appearance: "none",
  outline: "none",
};

const inputStyle = {
  flex: 1,
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
  outline: "none",
  minWidth: "220px",
};

const primaryButton = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "#2563eb",
  color: "#fff",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
};

const secondaryButton = {
  padding: "10px 18px",
  borderRadius: "10px",
  border: "1px solid #2563eb",
  background: "#eff6ff",
  color: "#2563eb",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
};

/* ---------- Languages ---------- */

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "kn", label: "Kannada" },
  { code: "ta", label: "Tamil" },
];

/* ---------- Component ---------- */

function MessageInput({ conversationId, onNewMessage }) {
  const [text, setText] = useState("");
  const [role, setRole] = useState("doctor");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
      const message = await sendMessage({
        conversationId,
        senderRole: role,
        text,
        sourceLanguage,
        targetLanguage,
      });

      onNewMessage(message);
      setText("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  const handleAudioUploaded = (audioUrl) => {
    onNewMessage({
      senderRole: role,
      audioUrl,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        borderTop: "1px solid #e5e7eb",
        paddingTop: "16px",
        flexWrap: "wrap",
      }}
    >
      {/* Role */}
      <select
        style={controlStyle}
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>

      {/* Source language */}
      <select
        style={controlStyle}
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            From {lang.label}
          </option>
        ))}
      </select>

      {/* Target language */}
      <select
        style={controlStyle}
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            To {lang.label}
          </option>
        ))}
      </select>

      {/* Text input */}
      <input
        style={inputStyle}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message…"
      />

      {/* Send button */}
      <button style={primaryButton} onClick={handleSend}>
        Send
      </button>

      {/* Audio */}
      <AudioRecorder
        buttonStyle={secondaryButton}
        onAudioUploaded={handleAudioUploaded}
      />
    </div>
  );
}

export default MessageInput;

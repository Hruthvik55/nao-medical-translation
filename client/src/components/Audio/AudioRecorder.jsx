import { useState, useRef } from "react";

function AudioRecorder({ onAudioUploaded }) {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      chunksRef.current = [];

      const formData = new FormData();
      formData.append("audio", blob);

      const res = await fetch("http://localhost:5000/api/audio/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      onAudioUploaded(data.audioUrl);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <button onClick={recording ? stopRecording : startRecording}>
      {recording ? "Stop Recording" : "Record Audio"}
    </button>
  );
}

export default AudioRecorder;

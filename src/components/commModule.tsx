import React, { useState, useEffect } from "react";

const CommModule: React.FC = () => {
  const [voiceInput, setVoiceInput] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    let recognition: SpeechRecognition | undefined;

    const startListening = () => {
      if (!("SpeechRecognition" in window)) {
        console.error("Speech recognition not supported");
        return;
      }

      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setVoiceInput(transcript);
      };

      recognition.start();
    };

    const stopListening = () => {
      if (recognition) {
        recognition.stop();
      }
    };

    if (isListening) {
      startListening();
    } else {
      stopListening();
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isListening]);

  return (
    <div>
      <button onClick={() => setIsListening(!isListening)}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <div className="voice-output">
        {voiceInput && <div className="voice-bubble">{voiceInput}</div>}
      </div>
    </div>
  );
};

export default CommModule;

import React, { useRef, useState, useEffect } from "react";
import RecordRTC from "recordrtc";
import axios from "axios";
import hark from "hark";
import { toast, ToastContainer } from "react-toastify";
import { set } from "react-hook-form";

const VoiceRecorder = (props) => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [responding, setResponding] = useState(false);

  const captureAudio = async (callback) => {
    try {
      const sound = await navigator.mediaDevices.getUserMedia({ audio: true });
      callback(sound);
    } catch (error) {
      alert("Unable to capture your sound. Please check console logs.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (!responding && !recording) {
      captureAudio((sound) => {
        const recorder = new RecordRTC(sound, {
          type: "audio",
          mimeType: "audio/webm",
          sampleRate: 22050,
          desiredSampRate: 16000,
        });
        startRecording(sound, recorder);
      });
    }
  }, [responding, recording]);

  const startRecording = (sound, recorder) => {
    setRecording(true);
    // mediaRecorderRef.current = mediaRecorder;
    props.onRecordUserAudio({ audioStatus: true });
    var max_seconds = 3;
    var stopped_speaking_timeout;
    var speechEvents = hark(sound, {});
    var isRecording = false;
    speechEvents.on("speaking", function () {
      if (!isRecording) {
        isRecording = true;
        recorder.startRecording();
      }

      if (recorder.getBlob()) return;
      clearTimeout(stopped_speaking_timeout);
    });
    speechEvents.on("stopped_speaking", function () {
      stopped_speaking_timeout = setTimeout(function () {
        if (recorder) {
          recorder.stopRecording(function () {
            const blob = recorder.getBlob();
            if (blob) {
              setAudioBlob(blob);
              recorder.clearRecordedData();
              stopRecording(blob);
            } else {
              console.log("No blob after stop");
            }
          });
        }
      }, max_seconds * 1000);
    });
  };
  const stopRecording = async (blob) => {
    //  console.log("iam here inside stop recording");
    setResponding(true);
    props.onRecordUserAudio({ audioStatus: false });
    setRecording(false);
    try {
      const formData = new FormData();
      blob && formData.append("file", blob);
      const response = await axios.post(`http://localhost:3001/api/transcribe`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      });
      const blobUrl = URL.createObjectURL(response.data);
      const audio = new Audio(blobUrl);
      audio.onended = () => {
        console.log("Audio played successfully.");
        setResponding(false);
      };
      audio.play();
      //   console.log("Transcription successful.");
    } catch (error) {
      console.error("Error sending audio to Whisper:", error);
    }
  };

  return <></>;
};

export default VoiceRecorder;

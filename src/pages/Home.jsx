import React, { useEffect } from "react";
import { useState } from "react";
import VoiceRecorder from "../components/VoiceRecorder";
import CommModule from "../components/commModule";
import { child, get, ref } from "firebase/database";
import { db } from "../firebase/firebase";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [outputText, setOutputText] = useState("");
  const [recordData, setRecordData] = useState(null);

  const dbRef = ref(db);

  const recordUserAudioHandler = (recordDataProps) => {
    console.log("recordDataProps is :" + recordDataProps.audioStatus);
    if (recordDataProps.audioStatus) {
      setRecordData(recordDataProps.audioStatus);
      console.log("recording status is :" + recordDataProps.audioStatus);
    }
  };

  return (
    <>
      <CommModule recordData={recordData} />
      <VoiceRecorder onRecordUserAudio={recordUserAudioHandler} />
    </>
  );
};

export default Home;

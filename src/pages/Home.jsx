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
  const [recordData, setRecordData] = useState({
    recordingStatus: false,
    audioData: null,
  });

  const dbRef = ref(db);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state before fetching
      setError(null); // Clear any previous errors

      try {
        const snapshot = await get(child(dbRef, "events/"));
        if (snapshot.exists()) {
          setEvents(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("No data available"); // Informational log (optional)
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false); // Set loading state after completion (success or error)
      }
    };

    fetchData();

    // Cleanup function (optional, if needed)
    return () => {
      // Unsubscribe from any subscriptions or clean up resources here
    };
  }, []);

  const recordUserAudioHandler = (recordDataProps) => {
    if (recordDataProps.audioData) {
      setRecordData({
        recordingStatus: recordDataProps.recordingStatus,
        audioData: recordDataProps.audioData,
      });
      // console.log('this is ' + recordDataProps.recordingStatus);
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

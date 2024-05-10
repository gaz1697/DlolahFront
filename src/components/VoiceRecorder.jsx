import React, { useRef, useState,useEffect } from 'react';
import RecordRTC from 'recordrtc';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


import { getDatabase, ref, child, get } from "firebase/database";



  
const VoiceRecorder = (props) => {
    const [transcription, setTranscription] = useState('');
    const [uploading, setUploading] = useState(false);
   const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorderRef = useRef(null);


    const startRecording = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new RecordRTC(stream, {
                    type: 'audio',
                    mimeType: 'audio/mpeg'
                });

                mediaRecorder.startRecording();
                setRecording(true);
                mediaRecorderRef.current = mediaRecorder;
            })
            .catch(err => {
                console.error('Error accessing microphone:', err);
            });
        props.onRecordUserAudio({ recordingStatus: recording, audioData: audioBlob });
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stopRecording(() => {
                setRecording(false);
                const audioBlob = mediaRecorderRef.current?.getBlob();
                if (audioBlob) {
                    setAudioBlob(audioBlob);
                }
            });
        }
        props.onRecordUserAudio({ recordingStatus: recording, audioData: audioBlob });
        
        
    };

    useEffect(() => {
        // Start recording when the component mounts
        startRecording();
    
        // Clean-up function to stop recording when the component unmounts
        return () => {
         
        };
      }, []);

    const sendToWhisper = async () => {
        setUploading(true);

    try {
      const formData = new FormData();
      audioBlob && formData.append('file', audioBlob);
      const response = await axios.post(`http://localhost:3001/api/transcribe`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response);
      
      toast.success('Transcription successful.')
    } catch (error) {
      toast.error('An error occurred during transcription.');
    } finally {
      setUploading(false);
    }

    try {

    }
    catch(error){

    }
        
      };

    return (
        <>
        <button onClick={recording ? stopRecording : startRecording}>
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioBlob && (
                <audio controls>
                    console.log("audioBlob:", audioBlob);
                    if(audioBlob){
                    <source src={URL.createObjectURL(audioBlob)} type='audio/mpeg' />}
                    Your browser does not support the audio element.
                </audio>
            )}
            <button onClick={sendToWhisper}>send</button>
            
        </>
    );
};

export default VoiceRecorder;

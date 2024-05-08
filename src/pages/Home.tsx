import React from 'react';
import { useState } from 'react';
import VoiceRecorder from '../components/VoiceRecorder';
import CommModule from '../components/commModule';

const Home = () => {
    const [recordData, setRecordData] = useState({
        recordingStatus: false,
        audioData: new Blob()
    });

    const recordUserAudioHandler = (recordDataProps) => {
        if (recordDataProps.audioData) {
            setRecordData({
                recordingStatus: recordDataProps.recordingStatus,
                audioData: recordDataProps.audioData
            });
            // console.log('this is ' + recordDataProps.recordingStatus);
        }
    };

    const sendToWhisper = () => {};

    return (
        <>
            <CommModule recordData={recordData} />
            <VoiceRecorder onRecordUserAudio={recordUserAudioHandler} />
        </>
    );
};

export default Home;

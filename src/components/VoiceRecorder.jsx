import React, { useRef, useState } from 'react';
import RecordRTC from 'recordrtc';


const VoiceRecorder = (props) => {
   const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorderRef = useRef(null);

    const startRecording = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new RecordRTC(stream, {
                    type: 'audio',
                    mimeType: 'audio/wav'
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

    return (
        <>
        <button onClick={recording ? stopRecording : startRecording}>
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioBlob && (
                <audio controls>
                    <source src={URL.createObjectURL(audioBlob)} type='audio/wav' />
                    Your browser does not support the audio element.
                </audio>
            )}
            
        </>
    );
};

export default VoiceRecorder;

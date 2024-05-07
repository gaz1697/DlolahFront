import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import animationData from '../../../public/icons/Animation - 1711499666786.json';
import { voiceRecorderProps } from '../../types';

const MyLottieAnimation = (props: { recordData: voiceRecorderProps }) => {
    const animationContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('hi');
        if (animationContainer.current) {
            const instance = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg', // or 'canvas', 'html'
                animationData: animationData,
                loop: !props.recordData.recordingStatus, // Set to true if you want the animation to loop
                autoplay: true // Set to true if you want the animation to start playing as soon as it's loaded
            });
            return () => instance.destroy();
        }
    }, [props.recordData.recordingStatus]);
    // console.log(props.recordData.recordingStatus);
    return <div ref={animationContainer} />;
};

export default MyLottieAnimation;

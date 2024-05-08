import Card from './UI/Card';
import MyLottieAnimation from './UI/VoiceAnimatation';
import React from 'react';


const CommModule = (porps) => {
    return (
        <div>
            <Card className='flex h-screen w-full items-center justify-center'>
                <p className='mb-4 text-2xl font-bold text-blue-500'>
                    Welcome to Dlolah, your AI help desk! What can I assist you with?
                </p>
                <div className='text-1xl'>
                    <MyLottieAnimation recordData={porps.recordData} />
                </div>
            </Card>
        </div>
    );
};

export default CommModule;

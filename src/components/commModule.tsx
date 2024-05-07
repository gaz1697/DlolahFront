import Card from './UI/Card';
import MyLottieAnimation from './UI/VoiceAnimatation';
import { voiceRecorderProps } from '../types';

const CommModule = (porps: { recordData: voiceRecorderProps }) => {
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

import { Toaster } from 'sonner';

import MyRouter from './router';
export default function App() {
    return (
        <div className='font-mono'>
            <Toaster richColors />
            <MyRouter />
        </div>
    );
}

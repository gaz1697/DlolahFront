import React, { useState } from 'react'
import MyRouter from './router';
import { Toaster } from 'sonner';

function App() {
  const [count, setCount] = useState(0)

  return (
       <div className='font-mono'>
            <Toaster richColors />
            <MyRouter />
        </div>
  )
}

export default App

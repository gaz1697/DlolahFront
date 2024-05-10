import React , {useState} from 'react';
import {
    signInWithEmailAndPassword
  } from "firebase/auth";
import { auth } from '../firebase/firebase';

const LoginCard = () => {

        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");

    const login = async () => {

        

        try {
          const user = await signInWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <div className='flex items-center justify-center'>
            <div className='mb-4 w-96 rounded bg-white px-8 pb-8 pt-6 shadow-md'>
                <h2 className='mb-6 text-center text-2xl'>Login</h2>
                <form>
                    <div className='mb-4'>
                        <label

                            className='mb-2 block text-sm font-bold text-gray-700'
                            htmlFor='Email'          

                       >
                            Email
                        </label>
                        <input
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            id='email'
                            type='text'
                            placeholder='email'
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                              }}
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            className='mb-2 block text-sm font-bold text-gray-700'
                            htmlFor='password'
                        >
                            Password
                        </label>
                        <input
                            className='focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            id='password'
                            type='password'
                            placeholder='Password'
                            onChange={(event) => {
                                setRegisterPassword(event.target.value);
                              }}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
                            type='button'
                            onClick={login}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginCard;

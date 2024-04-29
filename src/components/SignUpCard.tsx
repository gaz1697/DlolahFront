const SignupCard = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='mb-4 w-96 rounded bg-white px-8 pb-8 pt-6 shadow-md'>
                <h2 className='mb-6 text-center text-2xl'>Sign Up</h2>
                <form>
                    <div className='mb-4'>
                        <label
                            className='mb-2 block text-sm font-bold text-gray-700'
                            htmlFor='username'
                        >
                            Username
                        </label>
                        <input
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            id='username'
                            type='text'
                            placeholder='Username'
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
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className='focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none'
                            type='button'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupCard;

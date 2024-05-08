import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';

const AuthLayout = () => {
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated ? (
                <Navigate to='/dashboard' />
            ) : (
                <>
                    <section className='w-full'>
                        <Outlet />
                    </section>
                </>
            )}
        </>
    );
};

export default AuthLayout;

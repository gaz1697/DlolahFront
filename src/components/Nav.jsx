import React from 'react';
import NavBarButton from './UI/NavBarButton';

const Nav = () => {
    return (
        <nav className='w-full bg-blue-800 p-2'>
            <ul className='flex flex-row space-x-4'>
                <NavBarButton buttonName='Home' bPath='/' />
                <NavBarButton
                    buttonName='Dashboard'
                    bPath='/dashboard'
                />
                <NavBarButton buttonName='About us' bPath='/about' />
            </ul>
        </nav>
    );
};

export default Nav;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AuthBtns.css';

const AuthBtns = () => {
    return (
        <nav className='flex gap-6' data-aos="zoom-in">
            <Link to='/sign-up'>
                <button className='text-[9px] p-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500'>sIgN uP</button>
            </Link>
            <Link to='/sign-in'>
                <button className='text-[9px] p-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500'>sIgN iN</button>
            </Link>
        </nav>
    )
}

export default AuthBtns

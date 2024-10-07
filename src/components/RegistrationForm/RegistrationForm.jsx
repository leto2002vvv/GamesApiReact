import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const RegistrationForm = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const toggleEye = () => {
        setPasswordVisible(!passwordVisible)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName)
    }

    return (
        <form className='my-40 flex flex-col items-center justify-center gap-6 w-[500px] '
            onSubmit={handleSubmit}
            data-aos="zoom-in">
            <h1>siGn uP</h1>
            <input
                className='border-transparent bg-zinc-500 rounded-lg focus:border-x-purple-500 border-x-4 w-full py-2 px-4 focus:outline-none text-sm font-medium text-white-700 bg-transparent  transition-color  transform  transition-all duration-500 ease-in-out hover:blur-[1px] transition-100'
                type="text"
                placeholder='nAme yoUrsELf'
                value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            <input
                className='border-transparent bg-zinc-500 rounded-lg focus:border-x-purple-500 border-x-4 w-full py-2 px-4 focus:outline-none text-sm font-medium text-white-700 bg-transparent  transition-color  transform  transition-all duration-500 ease-in-out hover:blur-[1px] transition-100'
                type="email"
                placeholder='gIve uR e-Mail'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)} />
            <div className='relative w-[500px]'>
                <input
                    className='border-transparent bg-zinc-500 rounded-lg focus:border-x-purple-500 border-x-4 w-full py-2 px-4 focus:outline-none text-sm font-medium text-white-700 bg-transparent  transition-color  transform  transition-all duration-500 ease-in-out hover:blur-[1px] transition-100'
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder='aNd pAssWord'
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)} />
                <button onClick={toggleEye} className='absolute right-3 translate-y1/2 text-xl bottom-[10px]'>
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
            <button type='submit'
                className='p-3 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500'
            >sign up</button>
        </form>
    )
}

export default RegistrationForm

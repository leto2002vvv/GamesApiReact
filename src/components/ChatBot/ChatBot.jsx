import React, { useState } from 'react'

const ChatBot = () => {
	const [states, setStates] = useState({
		isYesClicked: false,
	})


	return (
		<div className='w-1/6 h-[340px] bg-transparent border border-purple-600 rounded-2xl fixed right-12 bottom-2/4 p-5 flex flex-col justify-between cursor-pointer hover:scale-105 hover:border-violet-900 transition-all duration-500'>
			<div>
				<div className='flex gap-3 items-center' >
					<div className='w-14 h-14 border rounded-full bg-cover bg-center' style={{ backgroundImage: 'url(/saw-icon.jpg)' }} />
					<p className='border-r-2 whitespace-nowrap overflow-hidden w-[107px] animation'>unknown</p>
				</div>
				<p className='p-3 bg-slate-400 my-2 rounded-xl'>u wanna play some game?</p>
			</div>
			<div className='flex gap-3 justify-center'>
				<button className='text-[9px] w-10 p-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:-translate-x-1 hover:border-fuchsia-500'
				onClick={() => }
				>yes</button>
				<button className='text-[9px] w-10 p-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500'>no</button>
			</div>
		</div>
	)
}

export default ChatBot

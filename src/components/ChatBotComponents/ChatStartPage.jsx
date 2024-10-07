import React from 'react'

const ChatStartPage = ({ setStates }) => {
	return (
		<div className='w-1/6 h-[340px] bg-transparent border border-purple-600 rounded-2xl fixed right-12 bottom-2/4 p-5 flex flex-col justify-between cursor-pointer hover:scale-105 hover:border-violet-900 transition-all duration-500  fade-from-right'>
			<div className='flex flex-col justify-center items-center h-full'
				onClick={() => {
					setStates(prev => {
						return {
							...prev,
							isFirstPage: false
						}
					})
				}}>
				<div className="relative pulse">
					<img src="/chat-icon.svg" alt="chat-icon" className='w-20' />
					<p className='absolute w-6 text-center top-0 right-0 bg-purple-500 rounded-full'> 1 </p>
				</div>
				<p className='text-center'>tap to continue</p>
			</div>
		</div>
	)
}

export default ChatStartPage

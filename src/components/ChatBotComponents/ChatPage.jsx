import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UnknownHelper from '../UnknownHelper/UnknownHelper'


const ChatPage = ({ states, setStates }) => {
	const [showComponent, setShowComponent] = useState(true)
	const [isAnimating, setIsAnimating] = useState(false)

	const navigate = useNavigate()

	const fadeAwayAnim = isAnimating ? 'reverse-fade-from-right' : ''

	const unmountComponent = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setShowComponent(false)
      setIsAnimating(false)
			navigate('/roulette')
    }, 500)
  }

	return (
		<>
			{showComponent && (
				<div className={`w-1/6 h-[340px] bg-transparent border border-purple-600 rounded-2xl fixed right-12 bottom-2/4 p-5 flex flex-col justify-between cursor-pointer hover:scale-105 hover:border-violet-900 transition-all duration-500  ${fadeAwayAnim}`}>
					<div>
						<UnknownHelper />
						<p className='p-3 bg-slate-400 my-2 rounded-xl'>u wanna play some game?</p>
						{states.btnClicked === 'yes' ? (<p className='p-3 bg-gray-700 my-2 rounded-xl '>...yes</p>) : null}
						{states.btnClicked === 'clickNo' ? (<p className='p-3 bg-slate-400 my-2 rounded-xl '>u will regret...</p>) : null}
						{states.btnClicked === 'clickYes' ? (<p className='p-3 bg-slate-400 my-2 rounded-xl '>proper decision</p>) : null}
					</div>
					<div className='flex gap-3 justify-center'>
						<button className='text-[9px] w-10 p-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:-translate-x-1 hover:border-fuchsia-500'
							onMouseEnter={() => {
								setStates(prev => {
									return {
										...prev,
										btnClicked: 'clickYes'
									}
								})
							}}
							onMouseLeave={() => {
								setStates(prev => {
									return {
										...prev,
										btnClicked: ''
									}
								})
							}}
							onClick={() => {
								setStates(prev => {
									return {
										...prev,
										btnClicked: 'yes'
									}
								})
								unmountComponent()
							}}
						>yes</button>
						<button className='text-[9px] w-10 p-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500'
							onMouseEnter={() => {
								setStates(prev => {
									return {
										...prev,
										btnClicked: 'clickNo'
									}
								})
							}}
							onMouseLeave={() => {
								setStates(prev => {
									return {
										...prev,
										btnClicked: ''
									}
								})
							}}
							onClick={() => {
								setStates(prev => {
									return {
										...prev,
										btnClicked: 'no'
									}
								})
							}}
						>no</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ChatPage

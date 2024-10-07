import React, { useState, useEffect } from 'react'
import UnknownHelper from '../UnknownHelper/UnknownHelper'


const CouponRoulette = () => {
	const [states, setStates] = useState({
		initialNumb: 7,
		isClicked: false,
		spinningSpeed: 100,
		spinDirection: 1,
		isStartClicked: false,
	})

	const handleSetNumb = (e) => {
		setStates(prev => ({
			...prev,
			initialNumb: e.target.value,
			isClicked: !prev.isClicked
		}))
	}

	// useEffect(() => {
	// 	const spinRoulette = () => {
	// 		const intervalId = setInterval(() => {
	// 			setStates(prev => {
	// 				let newNumb = prev.initialNumb * prev.spinDirection * prev.spinningSpeed / 100
	// 				newNumb = Math.round(newNumb % 7) + 1
	// 				return {
	// 					...prev,
	// 					initialNumb: newNumb,
	// 					spinningSpeed: Math.max(1, prev.spinningSpeed - 1)
	// 				}
	// 			})
	// 		}, 16)
	// 		clearInterval(intervalId)
	// 	}
	// }, [states.isStartClicked])

	return (
		<div className='w-3/5 h-[550px] my-12 bg-transparent border border-purple-600 rounded-2xl p-5 flex flex-col justify-center items-center cursor-pointer hover:border-violet-900 transition-all duration-500 gap-14 fade-from-right'>
			<div className="flex gap-4 justify-between">
				<UnknownHelper />
				<p className='p-3 bg-slate-400 my-2 rounded-xl '>to start the game just pick one number below, then spin the roulette</p>
			</div>
			<div className="bg-purple-700 bg-opacity-40 rounded-full px-20 p-5">
				<h1 className='text-[50px]'>{states.initialNumb}</h1>
			</div>
			<button
				onClick={() => {
					setStates(prev => {
						return {
							...prev,
							isStartClicked: !prev.isStartClicked
						}
					})
				}}
				className='px-10 py-5 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500'>start</button>
			<div className="flex gap-10">
				{[1, 2, 3, 4, 5, 6, 7].map((numb) => (
					<button
						onClick={() => handleSetNumb({ target: { value: numb } })}
						key={numb}
						className={`px-5 py-1 border border-white hover:text-fuchsia-500 transition-all duration-300 ease-in-out rounded-xl hover:translate-x-1 hover:border-fuchsia-500 ${states.isClicked ? 'focus:bg-purple-600' : ''}`}>{numb}</button>
				))}
			</div>
		</div >
	)
}

export default CouponRoulette

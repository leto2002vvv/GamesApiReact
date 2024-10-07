import React, { useState } from 'react'

const ArrowDown = () => {
	const [states, setStates] = useState({
		isScrolled: false,
		direction: 'top'
	})

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth'
		})
		setStates(prev => ({
			...prev,
			isScrolled: true,
			direction: 'down'
		}))
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		setStates(prev => ({
			isScrolled: false,
			direction: 'top'
		}))
	}

	const switchDirAnim = states.isScrolled ? 'switch-dir-animation' : ''

	return (
		<img
			onClick={states.direction === 'down' ? scrollToTop : scrollToBottom}
			className={`w-10 fixed bottom-12 right-12 cursor-pointer ${switchDirAnim}`}
			src="/arrowDownGif.gif"
			alt="click to scroll down" />
	)
}

export default ArrowDown

import React, { useState, useEffect, useRef } from 'react'
import ChatPage from './ChatPage'
import ChatStartPage from './ChatStartPage'

const ChatBot = () => {
	const [states, setStates] = useState({
		btnClicked: '',
		isFirstPage: true,
		isChatRendered: false
	})

	useEffect(() => {
		setTimeout(() => {
			setStates(prev => ({
				...prev,
				isChatRendered: true
			}))
	 }, 2000)
	}, [])

	return (
		<>
			{states.isChatRendered ? (states.isFirstPage ? <ChatStartPage setStates={setStates} /> : <ChatPage states={states} setStates={setStates} />) : null}
		</>
	)
}

export default ChatBot

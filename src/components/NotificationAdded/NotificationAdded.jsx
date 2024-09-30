import React, { useState, useEffect } from 'react'

const NotificationAdded = ({ currGame, IsGameAdded, setIsGameAdded }) => {
    const [hasClass, setHasClass] = useState(false);

    useEffect(() => {
        toggleClass();
    }, [currGame])

    const toggleClass = () => {
        setHasClass(prevState => !prevState);
        setHasClass(false)
    }

    useEffect(() => {
        let timeOutId;

        if (IsGameAdded) {
            timeOutId = setTimeout(() => {
                setIsGameAdded(false)
            }, 3000)
        }

        return () => clearTimeout(timeOutId)
    }, [IsGameAdded])

    return (
        <>
            <p className='text-[9px] text-shadow '>{`${currGame.name} добавлен в корзину`}</p>
        </>
    )
}

export default NotificationAdded

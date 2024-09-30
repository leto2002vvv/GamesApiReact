import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGameContext } from '../../providers/GameProvider'
import { useGameCounterContext } from '../../providers/GameCounter'
import Cart from '../../assets/shop-cart.svg'
import MenuIcon from '../../assets/menu.svg'

const Nav = () => {
    const { IsGameAdded, setIsGameAdded } = useGameContext()
    const { itemsInCart, ItemStorageCounter } = useGameCounterContext()

    useEffect(() => {
        ItemStorageCounter()
    })

    const addClass = IsGameAdded ? 'pulse' : ''

    const navigate = useNavigate()

    return (
        <nav className='flex gap-4 justify-between items-start'
            data-aos="zoom-in">
            <Link to='/'
                className='flex items-start gap-1 transform hover:translate-x-1 hover:text-fuchsia-500 transition-all duration-300 ease-in-out'>main
                <img src={MenuIcon} alt="shop-cart" className=' w-[18px] ' />
            </Link>

            <Link className={`transform hover:translate-x-1 hover:text-fuchsia-500 transition-all duration-300 ease-in-out flex items-start gap-.5 ${addClass}`}
                to='/added'>added
                <img src={Cart} alt="shop-cart" className='h-[30px]' />
                <p className='text-[9px]'> {itemsInCart} </p>
            </Link>
        </nav>
    )
}

export default Nav
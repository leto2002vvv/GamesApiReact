import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useGameContext } from '../../providers/IsGameAddedProvider'

import MenuIcon from '../../assets/menu.svg'
import Cart from '../../assets/shop-cart.svg'

const Nav = () => {
    const { IsGameAdded, setIsGameAdded } = useGameContext()
    const cartItems = useSelector(state => state.cartReducer.itemsInCart)

    const addClass = IsGameAdded ? 'pulse' : ''

    return (
        <nav className='flex gap-4 justify-between items-start'
            data-aos="zoom-in">
            <Link to='/'
                className='flex items-start gap-1 transform hover:translate-x-1 hover:text-fuchsia-500 transition-all duration-300 ease-in-out'>main
                <img src={MenuIcon} alt="shop-cart" className=' w-[18px] ' />
            </Link>

            <Link className={`transform hover:translate-x-1 hover:text-fuchsia-500 transition-all duration-300 ease-in-out flex items-start gap-.5 ${addClass}`}
                to='/added'>added
                <img src={Cart} alt="shop-cart" className='h-[30px] fill-slate-600' />
                <p className='text-[9px]'> {cartItems.length} </p>
            </Link>
        </nav>
    )
}

export default Nav
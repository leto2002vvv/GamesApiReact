import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { removeItem } from '../../slices/cartCounterSlice'

import PurchaseModal from '../PurchaseModal/PurchaseModal'

import deleteIcon from '../../assets/cartMinus.svg'

const Added = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [currItem, setCurrItem] = useState(null)
  const cartItems = useSelector((state) => state.cartReducer.itemsInCart) || []
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    setModalVisible(true)
    setCurrItem(game)
  }

  const handleRemoveItem = (clickedItem) => {
    dispatch(removeItem(clickedItem))
  }

  return (
    <>
      <h1 className='py-4'>Games Cart</h1>
      <ul className='grid grid-cols-4 gap-4'>
        {cartItems.map(cartItem => (
          cartItem.map(game => (
            <li key={`${cartItem.id}-${game.id}`}
              className='img-bg w-[160px] flex justify-center items-center shadow-2xl cursor-pointer'
              data-woah-speed="slow"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div
                onClick={handleOpenModal}
                style={{ backgroundImage: `url(${game.background_image})` }}
                className='w-[160px] h-[200px] bg-cover rounded-xl   hover:-translate-y-1 hover:scale-105 transition-transform duration-500 ease-out-in'>
                <div className='flex justify-between items-center text-center flex-col h-full gap-2 py-8  opacity-0  transition-all duration-500 hover:opacity-100 ease-in-out'>
                  <h5
                    className='max-w-[160px] w-full text-[11px] backdrop-blur-xl backdrop-filter-xl rounded transform hover:-translate-y-1 transition-all duration-500 ease-out-in  text-shadow'> {game.name.toLowerCase()} </h5>
                  <div>
                    <img
                      className='shadow-inner w-10 rounded hover:scale-125 transition-100 transition-all duration-500 ease-out-in transition-property all transition-duration 300ms'
                      src={deleteIcon}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveItem(game)
                      }}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))
        )
        )}
      </ul>

      <Link to='/'>back</Link>

      <PurchaseModal setModalVisible={setModalVisible} modalVisible={modalVisible} currItem={currItem} />
    </>
  )
}

export default Added

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../GameCardModal/GameCardModal.css'

import { useGameContext } from '../../providers/IsGameAddedProvider'
import { addItem } from '../../slices/cartCounterSlice'

import GameCardModal from '../GameCardModal/GameCardModal'
import NotificationAdded from '../NotificationAdded/NotificationAdded'
import PriceGenerator from '../PriceGenerator/PriceGenerator'

import cartAdd from '../../assets/cartAdd.svg'
import ArrowDown from '../ArrowDown/ArrowDown'

const GameList = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [currGame, setCurrGame] = useState(null)
  const { IsGameAdded, setIsGameAdded } = useGameContext()
  const games = useSelector(state => state.gameReducer.games) || []
  const dispatch = useDispatch()

  const openModal = (game) => {
    setModalVisible(true)
    setCurrGame(game)
  }

  const addToCart = (game) => {
    dispatch(addItem(game))
    showNotification(game)
  }

  const showNotification = (game) => {
    setIsGameAdded(true)
    setCurrGame(game)
  }
  console.log(games)

  return (
    <div>
      {typeof (games) === 'undefined' ? // условие если загрузка началась
        (<div className='flex justify-center items-center h-100% mx-auto'> Loading... </div>) :
        games.length > 0 ? // условие, когда загрузка завершилась, и мы рендерим получившееся на страницу
          (<ul className='grid md:grid-cols-4 gap-4 sm:grid-cols-2'>
            {games.map((game) =>
              <li key={game.id}
                className='img-bg w-[160px] flex justify-center items-center shadow-2xl cursor-pointer'
                data-woah-speed="slow"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div
                  style={{ backgroundImage: `url(${game.background_image})` }}
                  className='w-[160px]  h-[200px] bg-cover rounded-xl   hover:-translate-y-1 hover:scale-105 transition-transform duration-500 ease-out-in  relative'>
                  <div className="w-18 bg-purple-600 rounded-2xl absolute -top-3 right-0">
                    <div className='flex justify-center items-center'>
                      <h4 className='overflow-hidden'>
                        {game.calculatedPrice}
                      </h4>
                      <img src="/price-icon.svg" alt="price-icon" className='w-5' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center text-center flex-col h-full gap-2 pt-6  opacity-0  transition-all duration-500 hover:opacity-100 ease-in-out'
                    onClick={() => openModal(game)}>
                    <h5
                      className='max-w-[160px] w-full text-[11px] backdrop-blur-xl backdrop-filter-xl rounded transform hover:-translate-y-1 transition-all duration-500 ease-out-in  text-shadow'> {game.name.toLowerCase()} </h5>
                    {IsGameAdded && <NotificationAdded IsGameAdded={IsGameAdded} setIsGameAdded={setIsGameAdded} currGame={currGame} />}
                    <p className='text-[9px]'>
                      {game.released > new Date() ? (<p> release in {game.calculatedDaysTillRelease} days</p>) : (<p> released: {game.formattedReleaseDate} </p>)}
                    </p>
                    <div>
                      <img
                        src={cartAdd}
                        onClick={(e) => {
                          e.stopPropagation()
                          addToCart(game)
                        }}
                        alt={`add ${game.name} to your list`}
                        className='shadow-inner w-10 rounded hover:scale-125 transition-100 transition-all duration-500 ease-out-in transition-property all transition-duration 300ms' />
                    </div>
                  </div>
                </div>
              </li>)}
          </ul>) :
          (<p> </p>) // ТУТ ДОЛЖНО БЫТЬ ТИПО NOTHING FOUND. НО ИЗ-ЗА ТОГО ЧТО СЕЙЧАС СТОИТ ISLOADING FALSE, ТО ВЫПОЛНЯЕТСЯ УСЛОВИЕ В ЭТОЙ <P></P>.  В ЕЛЕМЕНТЕ, В КОТОРОМ МЫ УКАЗ. ПРОПСЫ ПОЯВЛЯЕТСЯ ЭТА САМАЯ <P></P>
      }
      <GameCardModal visible={modalVisible} onClose={() => setModalVisible(false)} currGame={currGame} />
      {/* <PriceGenerator /> */}
      <ArrowDown />
    </div>
  )
}

export default GameList


import React, { useState } from 'react'
import '../GameCardModal/GameCardModal.css'
import GameCardModal from '../GameCardModal/GameCardModal'
import './GameList.css'
import Cart from '../../assets/cart.svg'


const GameList = ({ games, isLoading }) => {

  console.log(games.name);

  const [modalVisible, setModalVisible] = useState(false);
  const [currGame, setCurrGame] = useState(null)

  console.log(currGame);
  console.log(modalVisible);

  const openModal = (game) => {
    setModalVisible(true);
    setCurrGame(game)
  }

  return (
    <div>
      {isLoading ? // условие если загрузка началась
        (<div className='flex justify-center items-center h-100% mx-auto'> Loading... </div>) :
        games.length > 0 ? // условие, когда загрузка завершилась, и мы рендерим получившееся на страницу

          (<ul className='grid grid-cols-4 gap-4'>
            {games.map((game) =>

              <li key={game.id}
                className='img-bg w-[160px] flex justify-center items-center shadow-2xl cursor-pointer pulse'
                data-woah-speed="slow"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >

                <div
                  style={{ backgroundImage: `url(${game.background_image})` }}
                  className='w-[160px] h-[200px] bg-cover rounded-xl   hover:-translate-y-1 hover:scale-105 transition-transform duration-500 ease-out-in'>
                  <div className='flex justify-between items-center text-center flex-col h-full gap-2 py-8  opacity-0  transition-all duration-500 hover:opacity-100 ease-in-out'
                    onClick={() => openModal(game)}>
                    <h5
                      className='max-w-[160px] w-full text-[11px] backdrop-blur-xl backdrop-filter-xl rounded transform hover:-translate-y-1 transition-all duration-500 ease-out-in  text-shadow'> {game.name.toLowerCase()} </h5>
                    <div>
                      <img
                        src={Cart}
                        alt={`add ${game.name} to your list`}
                        className='shadow-inner max-w-7 rounded hover:scale-125 transition-100 active:scale-50 transition-scale  hover:rotate-12  transition-all duration-500 ease-out-in' />
                    </div>
                  </div>
                </div>
              </li>)}

          </ul>) :

          (<p> </p>) // ТУТ ДОЛЖНО БЫТЬ ТИПО NOTHING FOUND. НО ИЗ-ЗА ТОГО ЧТО СЕЙЧАС СТОИТ ISLOADING FALSE, ТО ВЫПОЛНЯЕТСЯ УСЛОВИЕ В ЭТОЙ <P></P>.  В ЕЛЕМЕНТЕ, В КОТОРОМ МЫ УКАЗ. ПРОПСЫ ПОЯВЛЯЕТСЯ ЭТА САМАЯ <P></P>
      }

      <GameCardModal visible={modalVisible} onClose={() => setModalVisible(false)} currGame={currGame} />

    </div>
  )
}

export default GameList


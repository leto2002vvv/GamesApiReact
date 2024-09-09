import React from 'react'
import './GameCardModal.css'
import Star from '../../assets/star.svg'

const GameCardModal = ({ visible, onClose, currGame }) => {

  if (!visible) {
    return null
  }

  const getMetacriticColor = ({ currGame }) => {
    if (!currGame || !currGame.metacritic) return '';

    const metacritic = currGame.metacritic;

    if (metacritic >= 70) return 'green';
    else if (metacritic >= 40) return 'orange';
    else return 'red';
  };

  console.log(getMetacriticColor({ currGame }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 w-full h-screen transition-all duration-500 ease-in-out ">
      <div className=' bg-cover rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center fixed inset-0 w-2/4 h-2/4 '
        style={{ backgroundImage: `url(${currGame.background_image})` }}>
        <div className="backdrop-blur-2xl rounded w-10/12 p-3 flex flex-col gap-2">
          <h1 className='text-gray-400 text-center    text-shadow'> {currGame.name} </h1>
          <div className='flex justify-center items-center gap-4'>
            <p className='text-gray-400 text-center  text-shadow'> rating: {currGame.rating}  </p>
            {(() => { // the func shows the right amount of stars
              let stars = ''
              if (currGame.rating >= 4.5) stars = Array.from({ length: 5 }, (_, i) => <img key={i} className='h-3' src={Star} alt="5 stars-rated game" />);
              else if (currGame.rating >= 4) stars = Array.from({ length: 4 }, (_, i) => <img key={i} className='h-3' src={Star} alt="4 stars-rated game" />);
              else if (currGame.rating >= 3) stars = Array.from({ length: 3 }, (_, i) => <img key={i} className='h-3' src={Star} alt="3 stars-rated game" />);
              else if (currGame.rating >= 2) stars = Array.from({ length: 2 }, (_, i) => <img key={i} className='h-3' src={Star} alt="2 stars-rated game" />);
              else stars = Array.from({ length: 1 }, (_, i) => <img key={i} className='h-3' src={Star} alt="1 star-rated game" />);
              return stars
            })()}
          </div>
          <p className='text-gray-400 text-center  text-shadow'>
            metacritic:
            <span
              style={{ backgroundColor: getMetacriticColor({ currGame }) }}
              className='rounded-full'>
              {currGame.metacritic}
            </span>
          </p>
          <p className='text-gray-400 text-center  text-shadow'> available on:
            {currGame.platforms?.map((platform) => platform.platform.name).join(', ') || ''}
          </p>
          <p className='text-gray-400 text-center  text-shadow'> genre: {currGame.genres?.map((genre) => genre.name).join(', ') || ''}  </p>
          <button className='w-25 h-7  px-4 bg-none text-right border-2 border-gray-400 hover:blur-[1px] transition-100 border-l-0 text-sm font-medium text-gray-400 active:opacity-10   transition-color  transform hover:translate-x-1 transition-transform duration-500 ease-in-out  text-shadow'
            onClick={onClose}> close </button>
        </div>
      </div >
    </div>

  )
}

export default GameCardModal

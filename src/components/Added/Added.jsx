import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Added = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeItem = (clickedItem) => {
    const renewedCartItems = cartItems.filter(item => item.id !== clickedItem.id);
    setCartItems(renewedCartItems);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <>
      <h1 className='py-4'>Games Cart</h1>
      <ul className='grid grid-cols-4 gap-4'>
        {cartItems.map((game) =>
          <li key={game.id}
            className='img-bg w-[160px] flex justify-center items-center shadow-2xl cursor-pointer'
            data-woah-speed="slow"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div
              style={{ backgroundImage: `url(${game.background_image})` }}
              className='w-[160px] h-[200px] bg-cover rounded-xl   hover:-translate-y-1 hover:scale-105 transition-transform duration-500 ease-out-in'>
              <div className='flex justify-between items-center text-center flex-col h-full gap-2 py-8  opacity-0  transition-all duration-500 hover:opacity-100 ease-in-out'>
                <h5
                  className='max-w-[160px] w-full text-[11px] backdrop-blur-xl backdrop-filter-xl rounded transform hover:-translate-y-1 transition-all duration-500 ease-out-in  text-shadow'> {game.name.toLowerCase()} </h5>
                <div>
                  <button
                    className=' w-4 h-4 flex justify-center hover:scale-105 transition-100 active:scale-50 transition-scale transition-all duration-500 ease-out-in '
                    onClick={() =>
                      removeItem(game)
                    }
                  > remove
                  </button>
                </div>
              </div>
            </div>
          </li>)}
      </ul>
      <Link to='/'>back</Link>
    </>

  );
};

export default Added

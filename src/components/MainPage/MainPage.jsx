import React, { useState } from 'react'

import Search from '../../assets/search.svg'
import Filter from '../Filter/Filter'
import GameList from '../GameList/GameList'
import InputSearch from '../InputSearch/InputSearch'
import StartPageSlider from '../StartPageSlider/StartPageSlider'

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [toSort, setToSort] = useState('newest')
    const [SearchVisible, setSearchVisible] = useState(false)
    const [btnShowSearch, setBtnShowSearch] = useState(false)

    const handleShowSearch = () => {
        setBtnShowSearch(!btnShowSearch)
        setSearchVisible(!SearchVisible)
    }

    const sortGames = (arr, value) => { // sorting games arr by age and rating 
        return [...arr].sort((a, b) => {
            if (value === 'newest') {
                return b.released - a.released
            } else if (value === 'best') {
                return b.rating - a.rating
            } else {
                null
            }
        })
    }

    // const sortedGames = sortGames(gameData, toSort)

    return (
        <>
            {isLoading ? (
                <div className='relative min-h-screen'>
                    <div className='absolute inset-0'>loading...</div>
                </div>
            ) : SearchVisible ? (
                <>
                    <InputSearch />
                    <GameList />
                    <StartPageSlider />
                </>
            ) :
                <>
                    <div className='flex gap-9'>
                        <button className='text-3xl' onClick={handleShowSearch} >
                            <img src={Search} alt="search" className='w-10' />
                        </button>
                        <Filter toSort={toSort} setToSort={setToSort} />
                    </div>
                    <GameList />
                </>
            }
        </>
    )
}

export default MainPage
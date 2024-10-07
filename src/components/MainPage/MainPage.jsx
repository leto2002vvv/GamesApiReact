import React, { useState } from 'react'

import InputSearch from '../InputSearch/InputSearch'
import GameList from '../GameList/GameList'
import Filter from '../Filter/Filter'
import Search from '../../assets/search.svg'
import StartPageSlider from '../StartPageSlider/StartPageSlider'

const MainPage = () => {

    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [toSort, setToSort] = useState('newest')
    const [SearchVisible, setSearchVisible] = useState(true)
    const [btnShowSearch, setBtnShowSearch] = useState(false)
    const [isGameListVisible, setSsGameListVisible] = useState(false)

    // const apiKey = process.env.API_KEY;

    const handleShowSearch = () => {
        setBtnShowSearch(!btnShowSearch)
        setSearchVisible(!SearchVisible)
    }

    const fetchGames = async (term) => { // функция отправки запроса API 
        setIsLoading(true)

        try {
            const response = await fetch(`https://api.rawg.io/api/games?search=${term}&key=3d5399dc68864defac1b114b876d9fe8`)
            const data = await response.json()

            const parsedData = data.results.map(game => ({ // выводим из string number в released
                ...game,
                released: new Date(game.released)
            }))

            setGames(parsedData)
            console.log('полученые игры: ', games)

        } catch (error) {
            console.error('Ошибка при загрузке данных:', error)

        } finally {
            setIsLoading(false)
            setSearchVisible(false)
        }
    }

    const sortGames = (arr, value) => { // sorting games arr by age and rating 
        return arr.sort((a, b) => {
            if (value === 'newest') {
                return b.released - a.released
            } else if (value === 'best') {
                return b.rating - a.rating
            } else {
                null
            }
        })
    }

    const toSortFunc = sortGames(games, toSort) // here is the func sortGames being called

    return (
        <>
            {isLoading ? (
                <div className='relative min-h-screen'>
                    <div className='absolute inset-0'>loading...</div>
                </div>
            ) : SearchVisible ? (
                <>
                    <InputSearch onSearch={fetchGames} />
                    <GameList games={games} isLoading={isLoading} />
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
                    <GameList games={games} isLoading={isLoading} />
                </>
            }
        </>
    )
}

export default MainPage
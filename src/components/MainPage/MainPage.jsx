import React, { useState } from 'react'

import InputSearch from '../InputSearch/InputSearch';
import GameList from '../GameList/GameList';
import Filter from '../Filter/Filter'
import PriceGenerator from '../PriceGenerator/PriceGenerator'

const MainPage = () => {

    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [toSort, setToSort] = useState('newest');
    

    const fetchGames = async (term) => { // функция отправки запроса API 
        setIsLoading(true)

        try {
            const response = await fetch(`https://api.rawg.io/api/games?search=${term}&key=3d5399dc68864defac1b114b876d9fe8`);
            const data = await response.json();

            const parsedData = data.results.map(game => ({ // выводим из string number в released
                ...game,
                released: new Date(game.released)
            }));

            setGames(parsedData)
            console.log('полученые игры: ', games);

        } catch (error) {
            console.error('Ошибка при загрузке данных:', error)

        } finally {
            setIsLoading(false)
        }
    };

    const sortGames = (arr, value) => { // sorting games arr by age and rating 
        return arr.sort((a, b) => {
            if (value === 'newest') {
                return b.released - a.released;
            } else if (value === 'best') {
                return b.rating - a.rating;
            } else {
                null
            }
        })
    }

    const toSortFunc = sortGames(games, toSort) // here is the func sortGames being called

    return (
        <>
            {isLoading ? (
                <div className='flex justify-center items-center h-100% mx-auto'>
                    <div className='loader'>loading...</div>
                </div>
            ) : (
                <>
                    <InputSearch onSearch={fetchGames} />
                    <Filter toSort={toSort} setToSort={setToSort} />
                    <GameList games={games} isLoading={isLoading} />
                    <PriceGenerator games={games}/>
                </>
            )}
        </>
    );
}

export default MainPage

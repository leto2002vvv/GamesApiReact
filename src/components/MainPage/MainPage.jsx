import React, { useState } from 'react'
import InputSearch from '../InputSearch/InputSearch';
import GameList from '../GameList/GameList';
import FilterByRelease from '../Filters/FilterByRelease/FilterByRelease'
import FilterByRating from '../Filters/FilterByRating/FilterByRating';


const MainPage = () => {

    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [toSortByAge, setToSortByAge] = useState('newest');
    const [toSortByRating, setToSortByRating] = useState('best');

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

    const sortGames = (games, sortBy, sortedBy) => { // ПОДРУЖИТЬ ДВЕ СОРТИРОВКИ !!!!!!!!!!!!!!!!!!!!!!
        return games.sort((a, b) => {
            if (sortBy === toSortByAge) {
                return sortedBy === 'newest' ? b.released - a.released : a.released - b.released;
            } else if (sortBy === toSortByRating) {
                return sortedBy === 'best' ? b.rating - a.rating : a.rating - b.rating;
            } else {
                return 0
            }
        });
    }

    const toSortByAgeFunc = sortGames(games, toSortByAge, toSortByAge === 'newest' ? 'newest' : 'oldest');
    const toSortByRatingFunc = sortGames(games, toSortByRating, toSortByRating === 'best' ? 'best': 'worst')

    // const sortedByAge = games.sort((a, b) => toSortByAge === 'newest' ? b.released - a.released : a.released - b.released)
    // const sortedByRating = games.sort((a, b) => toSortByRating === 'best' ? b.rating - a.rating : a.rating - b.rating)

    return (
        <>
            {isLoading ? (
                <div className='flex justify-center items-center h-100% mx-auto'>
                    <div className='loader'>loading...</div>
                </div>
            ) : (
                <>
                    <InputSearch onSearch={fetchGames}/>
                    <div className="flex gap-4 items-center">
                        <FilterByRelease toSortByAge={toSortByAge} setToSortByAge={setToSortByAge} />
                        <FilterByRating toSortByRating={toSortByRating} setToSortByRating={setToSortByRating} />
                    </div>
                    <GameList games={games} isLoading={isLoading} />
                </>
            )}
        </>
    );
}

export default MainPage

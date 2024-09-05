import React, {useState} from 'react'
import InputSearch from '../InputSearch/InputSearch';
import GameList from '../GameList/GameList';

const Main = () => {

    const [games, setGames] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const fetchGames = async (term) => { // функция отправки запроса API 
        setIsLoading(true)

        try {
            const response = await fetch(`https://api.rawg.io/api/games?search=${term}&key=3d5399dc68864defac1b114b876d9fe8`);
            const data = await response.json();

            setGames(data.results)
            console.log('полученые игры: ', games);

        } catch (error) {
            console.error('Ошибка при загрузке данных:', error)

        } finally {
            setIsLoading(false)
        }
    };

    return (
        <>
            {isLoading ? (
                <div className='flex justify-center items-center h-100% mx-auto'>
                    <div className='loader'>Загрузка...</div>
                </div>
            ) : (
                <>
                    <InputSearch onSearch={fetchGames} />
                    <GameList games={games} isLoading={isLoading} />
                </>
            )}
        </>
    );
}

export default Main

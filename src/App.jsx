import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Nav from './components/Nav/Nav'
import InputSearch from './components/InputSearch/InputSearch'
import GameList from './components/GameList/GameList';

import './App.css'

function App() {

  const [games, setGames] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => { // Инициализация AOS
    AOS.init();
  }, [])

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="flex max-w-[1000px] max-h-[40px] items-center justify-between absolute inset-0 top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MusicPlayer />
        <Nav />
      </div>
      <InputSearch onSearch={fetchGames} />
      {isLoading ?
        (<div className='flex justify-center items-center h-100% mx-auto'> Loading... </div>) :
        (<GameList games={games} isLoading={isLoading} />)}
    </div>
  )
}

export default App

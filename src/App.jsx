import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Nav from './components/Nav/Nav';
import InputSearch from './components/InputSearch/InputSearch';
import GameList from './components/GameList/GameList';
import Main from './components/MainPage/MainPage';
// import List from './components/List/List';
import Added from './components/Added/Added';

import './App.css'

function App() {

  useEffect(() => { // Инициализация AOS
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <div className='flex justify-center my-7 items-center flex-col gap-3'>
        <div className="flex">
          <MusicPlayer />
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/list" element={<List />} /> */}
          <Route path="/added" element={<Added />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

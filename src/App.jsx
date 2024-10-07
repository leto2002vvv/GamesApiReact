import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import '../woah-animation.css'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import Nav from './components/Nav/Nav'
import Main from './components/MainPage/MainPage'
import Added from './components/Added/Added'
import AuthBtns from './components/AuthBtns/AuthBtns'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import SignInForm from './components/SignInForm/SignInForm'
import MainProvider from './providers/MainProvider'
import ChatBot from './components/ChatBotComponents/ChatBot'
import CouponRoulette from './components/CouponRoulette/CouponRoulette'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const tracks = [
    {
      band: 'Deftones',
      track: 'Be Quiet And Drive Far Away',
      src: '../../src/assets/tracks/DeftonesBeQuietAndDriveFarAway.mp3',
      page: 'https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH',
      poster: '../../assets/deftones-cover-be-quiet.jpg'
    },
    {
      band: 'Deftones ',
      track: 'Change In The House Of Flies',
      src: '../../src/assets/tracks/DeftonesChangeInTheHouseOfFlies.mp3',
      page: 'https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH',
      poster: '../../assets/deftones-cover-change.jpg'
    },
    {
      band: 'Marilyn Manson ',
      track: 'The Beautiful People',
      src: '../../src/assets/tracks/MarilynMansonTheBeautifulPeople.mp3',
      page: 'https://open.spotify.com/artist/2VYQTNDsvvKN9wmU5W7xpj',
      poster: '../../assets/manson-cover-beautiful-ppl.jpg'
    },
    {
      band: 'quannnic',
      track: 'Life Imitates Life',
      src: '../../src/assets/tracks/quannnicLifeImitatesLife.mp3',
      page: 'https://open.spotify.com/artist/6X9yxRiccMK40GHKfUFZEu',
      poster: '../../assets/quantoc-cover-life-imitates-life.jpg'
    }
  ]

  useEffect(() => { // Инициализация AOS
    AOS.init()
  }, [])

  return (
    <MainProvider>
      <BrowserRouter>
        <div className='flex  justify-center my-2 items-center flex-col gap-3 w-[1200px]'>
          <div className="flex w-2/3 justify-between ">
            <MusicPlayer tracks={tracks} />
            <div>
              <Nav />
              <AuthBtns />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/added" element={<Added />} />
            <Route path='/sign-up' element={<RegistrationForm />} />
            <Route path='/sign-in' element={<SignInForm />} />\
            <Route path='/roulette' element={<CouponRoulette />} />
          </Routes>
          <ChatBot />
          <Footer/>
        </div>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App

import React, { useRef, useState, useEffect } from 'react'
import './MusicPlayer.css'

import Triangle from '../../assets/triangle-btn.jpg'
import xButton from '../../assets/x-btn.jpg'
import MusicNote from '../../assets/music-note.svg'

const MusicPlayer = ({ tracks }) => {
    const songNameRef = useRef(null)
    const bandNameRef = useRef(null)
    const songCoverRef = useRef(null)
    const audioRef = useRef(null)
    const btnPlayStopRef = useRef(null)

    const [playerDetails, setPlayerDetails] = useState({
        currentIndex: 1,
        isPlaying: false,
        isLoading: false
    })

    const nextSong = () => { // следующий трек
        const newIndex = (playerDetails.currentIndex + 1) % tracks.length

        setPlayerDetails(prev => ({
            ...prev,
            currentIndex: newIndex
        }))
    }

    const prevSong = () => { // предыдущий трек 
        const newIndex = (playerDetails.currentIndex - 1 + tracks.length) % tracks.length

        setPlayerDetails(prev => ({
            ...prev,
            currentIndex: newIndex
        }))
    }

    useEffect(() => {
        const audio = audioRef.current

        if (playerDetails.isPlaying) {
            audio.play()
            btnPlayStopRef.textContent = 'stop'
        } else {
            audio.pause()
            btnPlayStopRef.textContent = 'play'
        }
    }, [playerDetails.isPlaying])

    const formWaveSurferOptions = (ref) => ({
        container: ref,
        waveColor: '#ccc',
        progressColor: '#0178ff',
        cursorColor: 'transparent',
        responsive: true,
        height: 80,
        normalize: true,
        backend: 'WebAudio',
        barWidth: 2,
        barGap: 3
    })

    useEffect(() => {
        const displaySongsName = () => {
            setPlayerDetails(prev => ({
                ...prev,
                isLoading: true
            }))

            const songName = songNameRef.current
            const bandName = bandNameRef.current
            const songCover = songCoverRef.current

            let bandLink = `<a href = "${tracks[playerDetails.currentIndex].page}"
                               target = '_blank'
                               rel = 'noopener noreferrer'
                               class = 'hover:text-fuchsia-500 transition-all duration-300 ease-in-out'>
                               band: ${tracks[playerDetails.currentIndex].band.toLowerCase()}   
                            </a>`

            if (!bandName.classList.contains('typing-animation')) { // ДОБАВЛЯЕТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ И ЧЕРЕЗ РАЗ !!!!!!!!!!!!!!!
                bandName.classList.add('typing-animation')
            } else {
                bandName.classList.remove('typing-animation')
            }

            if (!songName.classList.contains('typing-animation')) { // ДОБАВЛЯЕТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ И ЧЕРЕЗ РАЗ !!!!!!!!!!!!!!!
                songName.classList.add('typing-animation')
            } else {
                songName.classList.remove('typing-animation')
            }

            bandName.innerHTML = bandLink // исполнитель и ссылка на спотифай в <р>

            songName.textContent = `song: ${tracks[playerDetails.currentIndex].track.toLowerCase()}` // название трека в <р>
        }
        displaySongsName()
    }, [playerDetails.currentIndex])

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-6 max-w-[340px] flex-wrap relative'
                data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <audio
                    src={tracks[playerDetails.currentIndex].src}
                    // autoPlay
                    ref={audioRef}>
                </audio>

                <figure className='cursor-pointer flex gap-1 items-center hover: transition-all transform hover:translate-x-1  duration-500 ease-in-out'
                    id='prevBtn'
                    onClick={prevSong}>
                    <img src={Triangle}
                        alt="Previous track"
                        className='max-w-[20px] rounded-full'
                    />
                    <figcaption className='hover:text-fuchsia-500 transition-all duration-300 ease-in-out'> prev </figcaption>
                </figure>

                <button
                    className='hover:text-fuchsia-500 transition-all transform hover:translate-x-1 duration-300'
                    onClick={() => {
                        setPlayerDetails(prev => {
                            return {
                                ...prev,
                                isPlaying: !prev.isPlaying
                            }
                        })
                    }}
                    ref={btnPlayStopRef}>
                    stop
                </button>

                <figure className='cursor-pointer flex gap-1 items-center transition-color transform hover:translate-x-1 transition-transform duration-500 ease-in-out'
                    id='nextBtn'
                    onClick={nextSong}
                >
                    <img src={xButton}
                        alt="Next track"
                        className='max-w-[20px] rounded-full'
                    />
                    <figcaption className='hover:text-fuchsia-500 duration-300 transition-all'> next </figcaption>
                </figure>
                <div className={`absolute -top-1 left-[281px] flex ${playerDetails.isPlaying ? 'pulse' : ''}`}>
                    <img src={MusicNote} alt="decoration" className={`w-7`} />
                    <img src={MusicNote} alt="decoration" className={`w-4 rotate-12`} />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <div className="">
                        <img
                            className=''
                            src={tracks[playerDetails.currentIndex].poster}
                            id='cover'
                            alt='cover'
                            ref={songCoverRef}
                            loading='lazy'
                        />
                    </div>
                    <div className=' whitespace-nowrap overflow-ellipsis'>
                        <div className='bouncing-text'>
                            <p id='bandName' ref={bandNameRef} className='songsText leading-none typing-animation'></p>
                            <p id='songName' ref={songNameRef} className='songsText typing-animation'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default MusicPlayer

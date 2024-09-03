import React, { useRef, useState, useEffect } from 'react'
import WaveSurfer from 'wavesurfer.js'

import './MusicPlayer.css'

import Triangle from '../../assets/triangle-btn.jpg';
import xButton from '../../assets/x-btn.jpg'

const MusicPlayer = () => {

    const songNameRef = useRef(null);
    const bandNameRef = useRef(null);
    const songCoverRef = useRef(null);

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
    ];

    const [currentIndex, setCurrentIndex] = useState(1); // состояние array tracks
    const [isLoaded, setIsLoaded] = useState(false)

    const nextSong = () => { // следующий трек
        const nextBtn = document.querySelector('#nextBtn');
        setCurrentIndex((currentIndex + 1) % tracks.length);
    }

    const prevSong = () => { // предыдущий трек 
        const prevBtn = document.querySelector('#prevBtn');
        setCurrentIndex((currentIndex - 1 + tracks.length) % tracks.length);
    }

    const playStop = () => { // кнопка пауза продолжать
        const audio = document.querySelector('#audio');
        const btnPlayStop = document.querySelector('#btnPlayStop')

        if (audio.paused) {
            audio.play();
            btnPlayStop.textContent = 'stop';
        } else {
            audio.pause();
            btnPlayStop.textContent = 'play';
        }
    };

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
        const displaySongsName = async () => {

            const songName = songNameRef.current;
            const bandName = bandNameRef.current;
            const songCover = songCoverRef.current;

            songCover.onload = () => {
                console.log('img is loaded');
            }


            let bandLink = `<a href = "${tracks[currentIndex].page}"
                               target = '_blank'
                               rel = 'noopener noreferrer'
                               class = 'hover:text-gray-600'>
                               band: ${tracks[currentIndex].band.toLowerCase()}   
                            </a>`;

            if (!bandName.classList.contains('typing-animation')) { // ДОБАВЛЯЕТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ И ЧЕРЕЗ РАЗ !!!!!!!!!!!!!!!
                bandName.classList.add('typing-animation');
            } else if (bandName.classList.contains('typing-animation')) {
                bandName.classList.remove('typing-animation');
            }              //  УБРАТЬ ПРОБЛЕМУ С РАСШИРЯЩИМСЯ ВВЕРХ ПЕЧАТАЮЩИМСЯ ТЕКСТОМ

            if (!songName.classList.contains('typing-animation')) { // ДОБАВЛЯЕТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ И ЧЕРЕЗ РАЗ !!!!!!!!!!!!!!!
                songName.classList.add('typing-animation');
            } else if (songName.classList.contains('typing-animation')) {
                songName.classList.remove('typing-animation');
            }              //  УБРАТЬ ПРОБЛЕМУ С РАСШИРЯЩИМСЯ ПЕЧАТАЮЩИМСЯ ТЕКСТОМ

            bandName.innerHTML = bandLink; // исполнитель и ссылка на спотифай в <р>

            songName.textContent = `song: ${tracks[currentIndex].track.toLowerCase()}`; // название трека в <р>
        };
        

        displaySongsName();
    }, [currentIndex]);

    return (
        <div className='flex items-center gap-6 max-w-[340px] flex-wrap'
            data-aos="fade-up"
            data-aos-anchor-placement="center-center">
            <audio
                src={tracks[currentIndex].src}
                // autoPlay
                id="audio">
            </audio>

            <figure className='cursor-pointer flex gap-1 items-center hover:grayscale transition-color duration-100 transform hover:translate-x-1 transition-transform duration-500 ease-in-out'
                id='prevBtn'
                onClick={prevSong}>
                <img src={Triangle}
                    alt="Previous track"
                    className='max-w-[40px] rounded-full'
                />
                <figcaption className='hover:text-gray-600'> prev </figcaption>
            </figure>

            <button
                className='hover:text-gray-600 transition-color duration-100 transform hover:translate-x-1 transition-transform duration-500 ease-in-out'
                onClick={playStop}
                id='btnPlayStop'>
                stop
            </button>

            <figure className='cursor-pointer flex gap-1 items-center hover:grayscale transition-color duration-100 transform hover:translate-x-1 transition-transform duration-500 ease-in-out'
                id='nextBtn'
                onClick={nextSong}
            >
                <img src={xButton}
                    alt="Next track"
                    className='max-w-[40px] rounded-full'
                />
                <figcaption className='hover:text-gray-600'> next </figcaption>
            </figure>
            <div className='min-w-[340px] min-h-[40px]'>
                <img
                    className='min-w-[40px] min-h-[40px]'
                    src={tracks[currentIndex].poster}
                    id='cover'
                    alt={`cover to ${tracks[currentIndex].track.toLowerCase()}`}
                    ref={songCoverRef}
                    loading='lazy'
                />
                <p id='bandName' ref={bandNameRef} className='songsText  leading-none overflow-hidden typing-animation'></p>
                <p id='songName' ref={songNameRef} className='songsText typing-animation'></p>
            </div>

        </div>
    )
}

export default MusicPlayer

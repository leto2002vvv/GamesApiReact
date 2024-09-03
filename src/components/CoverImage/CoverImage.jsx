import React, { Fragment } from 'react'

const CoverImage = ({ tracks, currentIndex }) => {

    const songNameRef = useRef(null);



    return (
        <img
            className='min-w-[40px] min-h-[40px]'
            src={tracks[currentIndex].poster}
            id='cover'
            alt={`cover to ${tracks[currentIndex].track.toLowerCase()}`}
            ref={songCoverRef}
            loading='lazy'
        />
    )
}

export default CoverImage

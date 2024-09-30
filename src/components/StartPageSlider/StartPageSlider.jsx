import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const StartPageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  }

  return (
    <div className="w-1/2 mt-12">
      <h1 className='text-center my-3'> are available: </h1>
      <Slider {...settings}>
        <img className='h-[350px] w-full object-cover hover:scale-105 transition-all duration-500' src="/cyberpunk2077.jpg" alt="slider" />
        <img className='h-[350px] w-full object-cover hover:scale-105 transition-all duration-500' src="/silentHillCover.jpg" alt="slider" />
        <img className='h-[350px] w-full object-cover hover:scale-105 transition-all duration-500' src="/starWarsCover.avif" alt="slider" />
        <img className='h-[350px] w-full object-cover hover:scale-105 transition-all duration-500' src="/tekkenCover.jpg" alt="slider" />
      </Slider>
    </div>
  )
}

export default StartPageSlider

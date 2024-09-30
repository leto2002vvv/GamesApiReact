import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const SecondSlider = () => {
	const [fetchData, setFetchData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 3,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 4000,
		className: 'center'

	}

	// useEffect(() => {
	// 	const fetchRequest = async () => {
	// 		setIsLoading(true)
	// 		try {
	// 			const responce = await fetch(`https://api.rawg.io/api/games?key=3d5399dc68864defac1b114b876d9fe8&`)
	// 			const data = await responce.json()
	// 			setFetchData(data.results)
	// 		} catch (error) {
	// 			console.error('Error catching data:', error)
	// 		} finally {
	// 			setIsLoading(false)
	// 		}
	// 	}
	// 	fetchRequest()
	// }, [])

	console.log(fetchData)

	return (
		<div className='my-16 w-1/2'>
			{isLoading ? <p>loading...</p> : (
				<Slider {...settings}>
					<ul>
						{fetchData.length > 0 ?
							fetchData.map((game) =>
								<li key={game.id}>
									<div style={{ backgroundImage: `url(${game.background_image})` }}
										className='w-[160px]  h-[200px] bg-cover rounded-xl   hover:-translate-y-1 hover:scale-105 transition-transform duration-500 ease-out-in'>
										<p className='text-xs text-center p-2'> {game.name} </p>
									</div>
								</li>
							) : (
								<p>no data</p>
							)
						}
					</ul>
				</Slider>
			)}
		</div>

	)
}

export default SecondSlider

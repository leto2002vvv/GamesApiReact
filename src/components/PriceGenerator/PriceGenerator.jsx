import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getTransformedGames } from '../../slices/gameSlice'

const PriceGenerator = () => {
    const games = useSelector(state => state.gameReducer.games)
    const dispatch = useDispatch()

    console.log(games)

    const calculatePrice = (game) => {
        const rating = game.rating || 0
        const metacritic = game.metacritic || 0
        const released = game.released || 0
        const oneYearAgo = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate())

        let price = 0

        if (rating >= 3.5 && metacritic >= 70 && released > oneYearAgo) {
            price = 40
        } else if (!rating && !metacritic) {
            price = 0.99
        }
        else if (!rating || !metacritic) {
            price = 5
        }
        else if (rating < 3.5 || metacritic < 70) {
            price = 25
        } else {
            price = 15
        }
        return price
    }

    const formateReleaseDate = (releaseDate) => {
        const year = releaseDate.getFullYear()
        const date = releaseDate.getDate()
        const month = String(releaseDate.getMonth() + 1)

        return `${date}-${month}-${year}`
    }

    const calculateDaysTillRelease = (release) => {
        const currDate = new Date()
        const releaseDate = new Date(release)

        const counterToRelease = Math.floor((releaseDate - currDate) / (1000 * 60 * 60 * 24))

        return counterToRelease
    }


    const CalculatedFormattedGames = (
        games.map(game => ({
            ...game,
            calculatedPrice: calculatePrice(game),
            formattedReleaseDate: formateReleaseDate(game.released),
            calculatedDaysTillRelease: calculateDaysTillRelease(game.released),
        }))
    )
    
    dispatch(getTransformedGames(CalculatedFormattedGames))
}

export default PriceGenerator

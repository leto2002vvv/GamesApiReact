import React, { useState, useEffect } from 'react'

const PriceGenerator = ({ games }) => {

    const calculatePrice = (game) => {
        const rating = game.rating || 0;
        const metacritic = game.metacritic || 0;

        let price = 0;

        if (rating >= 3.5 && metacritic >= 70) {
            price = 40;
        } else if (!rating && !metacritic) {
            price = 0.99;
        }
        else if (!rating || !metacritic) {
            price = 5;
        }
        else if (rating < 3.5 || metacritic < 70) {
            price = 25;
        }
        return price;
    };

    const formateReleaseDate = ( releaseDate ) => {
        const year = releaseDate.getFullYear();
        const date = releaseDate.getDate()
        const month = String(releaseDate.getMonth() + 1);

        return `${date}-${month}-${year}`
    }

    const calculateDaysTillRelease = (release) => {
        const currDate = new Date();
        const releaseDate = new Date(release);

        if (releaseDate > currDate) {
            const counterToRelease = Math.floor((releaseDate - currDate) / (1000 * 60 * 60 * 24))
            return counterToRelease
        } else return release;
    }
}

export default PriceGenerator

import React, { createContext, useContext, useState } from "react";

const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {
    const [gameData, setGameData] = useState([]);

    return (
        <GameDataContext.Provider value={{gameData, setGameData}}>
            { children }
        </GameDataContext.Provider>
    )
}

export const useGameDataContext = () => useContext(GameDataContext);
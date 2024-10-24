import React, { createContext, useContext, useState } from 'react'

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [IsGameAdded, setIsGameAdded] = useState(false); // если isGameAdded отправить context в added и добавить класс
    
    return (
        <GameContext.Provider value={{ IsGameAdded, setIsGameAdded }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => useContext(GameContext);
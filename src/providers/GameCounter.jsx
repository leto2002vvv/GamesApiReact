import React, { createContext, useState, useContext } from "react";

const GameCounterContext = createContext();

export const GameCounter = ({ children }) => {
    const [itemsInCart, setItemsInCart] = useState(0);

    const ItemStorageCounter = () => {
        if ('cart' in localStorage) {
            const itemsInCart = JSON.parse(localStorage.getItem('cart'));
            setItemsInCart(itemsInCart? itemsInCart.length : 0)
        }
    }

    return (
       <GameCounterContext.Provider value={{itemsInCart, ItemStorageCounter}}>
        { children }
       </GameCounterContext.Provider> 
    )
}

export const useGameCounterContext = () => useContext(GameCounterContext);
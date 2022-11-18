import React, { useState } from 'react';
import { createContext } from 'react';

export const DisplayGamesContext = createContext();

export function DisplayGamesContextProvider({ children }) {

    const [displayGames, setDisplayGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState();

    return (
        <DisplayGamesContext.Provider value={{ displayGames, setDisplayGames, selectedGame, setSelectedGame }}>
            {children}
        </DisplayGamesContext.Provider>
    )
}

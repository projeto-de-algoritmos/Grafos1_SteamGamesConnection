import React, { useState, useContext } from 'react';
import { DisplayGamesContext } from '../../context/games.context';
import Item from '../../components/Item';
import './index.css';

const HomePage = () => {

    const { selectedGame } = useContext(DisplayGamesContext);

    return (
        <div className="container pt-3">
            <div className="row center">
                <div className="col-3 text-center homepage-sidebar">
                    <div className="sidebar-tittle">
                        <h2>Resultados da pesquisa <p>67<span>Encontrados</span></p></h2>
                    </div>
                    <div className="sidebar-results">
                        <Item />
                    </div>
                </div>
                <div className="col-8 text-center homepage-content">
                    Grafo
                </div>
            </div>
        </div>
    )
}

export default HomePage;
import React, { useState, useContext } from 'react';
import Graph from 'react-vis-network-graph';
import { v4 as uuidv4 } from 'uuid';
import { DisplayGamesContext } from '../../context/games.context';
import { SearchGameDetailsById } from '../../services/steam.service';
import Item from '../../components/Item';
import options from '../../styles/VisOptions';
import './index.css';

const HomePage = () => {

    const { selectedGame, displayGames, setSelectedGame } = useContext(DisplayGamesContext);
    const [details, setDetails] = useState();

    const handleSelectedGame = async (game) => {
        setSelectedGame(game);
        const game_details = await SearchGameDetailsById(game.value);
        setDetails(game_details.data);
    }

    return (
        <div className="container pt-3">
            <div className="row center">
                <div className="col-3 text-center homepage-sidebar">
                    <div className="sidebar-tittle">
                        <h2>Resultados da pesquisa <p>{displayGames.length}<span> Encontrados</span></p></h2>
                    </div>
                    <div className="sidebar-results">
                        {
                            displayGames && displayGames.length > 0 && displayGames.map((game, index) => {
                                return (
                                    <div onClick={() => handleSelectedGame(game)} key={index}>
                                        <Item
                                            id={game.value}
                                            name={game.label}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-8 text-center homepage-content">
                    <div className="graph-tittle">
                        <h2>{selectedGame ? selectedGame.label : 'Busque e Selecione um jogo'}</h2>
                    </div>
                    <Graph
                        key={uuidv4()}
                        graph={details}
                        options={options}
                        style={options.style}
                    />

                </div>
            </div>
        </div>
    )
}

export default HomePage;
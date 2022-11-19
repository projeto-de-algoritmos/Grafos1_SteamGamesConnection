import React, { useState, useContext } from 'react';
import Graph from 'react-vis-network-graph';
import { v4 as uuidv4 } from 'uuid';
import { DisplayGamesContext } from '../../context/games.context';
import { SearchGameDetailsById } from '../../services/steam.service';
import Item from '../../components/Item';
import options from '../../VisOptions';
import './index.css';

const HomePage = () => {

    const { selectedGame, displayGames, setSelectedGame } = useContext(DisplayGamesContext);
    const [details, setDetails] = useState();

    const handleSelectedGame = async (game) => {
        console.log("item selecionado")
        setSelectedGame(game);
        const game_details = await SearchGameDetailsById(game.value);
        setDetails(game_details.data);
    }

    const graph = {
        nodes: [
            { id: 1, label: "Node 1", title: "node 1 tootip text" },
            { id: 2, label: "Node 2", title: "node 2 tootip text" },
            { id: 3, label: "Node 3", title: "node 3 tootip text" },
            { id: 4, label: "Node 4", title: "node 4 tootip text" },
            { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    };

    const optionsDefault = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    };

    const events = {
        select: function (event) {
            var { nodes, edges } = event;
        }
    };

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
                    {/* <Graph
                        graph={details}
                        options={options}
                        style={options.style}
                    /> */}
                    <Graph
                        key={uuidv4()}
                        graph={graph}
                        options={optionsDefault}
                        events={events}
                        getNetwork={network => {
                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
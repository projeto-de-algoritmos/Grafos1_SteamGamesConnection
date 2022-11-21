import React, { useState, useContext } from 'react';
import { DisplayGamesContext } from '../../context/games.context';
import { SearchGameByName } from '../../services/steam.service';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaSteam } from 'react-icons/fa';
import './index.css';

const Header = () => {

    const { selectedGame, setSelectedGame, displayGames, setDisplayGames } = useContext(DisplayGamesContext);

    const theme = createTheme({
        status: {
            danger: '#cdb380',
        },
        palette: {
            primary: {
                main: '#cdb380',
            }
        },
    });

    const handleInput = async (e) => {
        let search_games = await SearchGameByName(e);
        console.log("SEARCH GAME -->",search_games)
        setDisplayGames(search_games.data);
    }

    return (
        <div className='header-container'>
            <div className="header-title">
                <h1>Steam Games Connection <FaSteam /></h1>
            </div>

            <div className="header-content">
                <ThemeProvider theme={theme}>
                    <TextField
                        onChange={(e) => handleInput(e.target.value)}
                        theme={theme}
                        id="standard-basic"
                        label="Pesquisar por jogo"
                        variant="outlined"
                        size="large"
                        fullWidth
                        margin="none"
                        placeholder="Busque por Nome, Categoria ou Fabricante"
                        color="primary"
                        sx={{ input: { color: '#cdb380' } }}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;
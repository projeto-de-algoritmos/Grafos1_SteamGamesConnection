import React, { useState, useContext } from 'react';
import { DisplayGamesContext } from '../../context/games.context';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaSteam } from 'react-icons/fa';
import './index.css';

const Header = () => {

    const { selectedGame, setSelectedGame } = useContext(DisplayGamesContext);

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

    const handleInput = (e) => {
        console.log("Event.target.value: ", e);
        setSelectedGame(e);
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
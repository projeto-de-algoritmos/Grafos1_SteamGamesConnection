import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';

const Header = () => {

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
    }

    return (
        <div className='header-container'>
            <div className="header-title">
                <h1>Steam Gamer Connection</h1>
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
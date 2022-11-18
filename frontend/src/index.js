import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DisplayGamesContextProvider } from './context/games.context';
import './styles/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayGamesContextProvider>
      <App />
    </DisplayGamesContextProvider>
  </React.StrictMode>
);

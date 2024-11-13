import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import { GameProvider } from './context/GameContext';

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);
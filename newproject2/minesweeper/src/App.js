// src/App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import RulesPage from './components/RulesPage';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/game/easy">Game (Easy)</a></li>
              <li><a href="/game/medium">Game (Medium)</a></li>
              <li><a href="/game/hard">Game (Hard)</a></li>
              <li><a href="/rules">Rules</a></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:difficulty" element={<GamePage />} />
            <Route path="/rules" element={<RulesPage />} />
          </Routes>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;

import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [revealedCells, setRevealedCells] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [difficulty, setDifficulty] = useState('easy'); // 添加 difficulty 和 setDifficulty

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        revealedCells,
        setRevealedCells,
        gameOver,
        setGameOver,
        gameWon,
        setGameWon,
        difficulty,
        setDifficulty // 确保 setDifficulty 被传递
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
import React from 'react';
import { useGameContext } from '../context/GameContext';
import Cell from './Cell';

const Board = () => {
  const { board, revealedCells, setRevealedCells, gameOver, setGameOver } = useGameContext(); // 确保从 GameContext 获取 setGameOver 和 gameOver

  const handleCellClick = (row, col) => {
    if (gameOver || revealedCells[row][col]) return;

    const newRevealedCells = [...revealedCells];
    newRevealedCells[row][col] = true;
    setRevealedCells(newRevealedCells);

    if (board[row][col] === 'M') {
      setGameOver(true);
    }
  };

  const gridTemplateColumns = `repeat(${board[0]?.length}, 30px)`; // 每个格子宽度为 30px

  return (
    <div className="board" style={{ display: 'grid', gridTemplateColumns }}>
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={cell}
            isRevealed={revealedCells[rowIndex][colIndex]}
            onClick={handleCellClick}
          />
        ))
      ))}
    </div>
  );
};

export default Board;


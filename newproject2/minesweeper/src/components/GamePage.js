import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom'; // 删除 useNavigate 的导入
import { useGameContext } from '../context/GameContext';
import Board from './Board';
import DifficultySelector from './DifficultySelector';

const GamePage = () => {
  const { gameOver, setGameOver, setBoard, setRevealedCells, gameWon, setGameWon, setDifficulty } = useGameContext(); // 需要获取 gameWon
  const { difficulty: urlDifficulty } = useParams(); // 获取路由中的 difficulty 参数

  const [difficulty, setLocalDifficulty] = useState(urlDifficulty || 'easy'); // 默认值为 'easy'

  const generateBoard = useCallback((difficulty) => {
    let rows, cols, mines;

    if (difficulty === 'easy') {
      rows = 8;
      cols = 8;
      mines = 10;
    } else if (difficulty === 'medium') {
      rows = 16;
      cols = 16;
      mines = 40;
    } else if (difficulty === 'hard') {
      rows = 16;
      cols = 30;
      mines = 99;
    }

    const board = createBoard(rows, cols, mines);
    setBoard(board);
    setRevealedCells(Array(rows).fill().map(() => Array(cols).fill(false)));
    setGameOver(false);
    setGameWon(false);
  }, [setBoard, setRevealedCells, setGameOver, setGameWon]);

  const createBoard = (rows, cols, mines) => {
    const board = Array(rows).fill().map(() => Array(cols).fill(0));

    for (let i = 0; i < mines; i++) {
      let row, col;
      do {
        row = Math.floor(Math.random() * rows);
        col = Math.floor(Math.random() * cols);
      } while (board[row][col] === 'M');
      board[row][col] = 'M';

      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== 'M') {
            board[r][c] += 1;
          }
        }
      }
    }
    return board;
  };

  // 仅在difficulty改变时重新生成棋盘
  useEffect(() => {
    setDifficulty(difficulty);
    generateBoard(difficulty);
  }, [difficulty, setDifficulty, generateBoard]);

  const restartGame = () => {
    generateBoard(difficulty);
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="game-page">
      <h1>Minesweeper</h1>
      <DifficultySelector difficulty={difficulty} onDifficultyChange={setLocalDifficulty} />
      <Board />
      <button onClick={restartGame}>Restart</button>
      {gameOver && <div className="game-message game-over">Game Over! You lost!</div>}
      {gameWon && <div className="game-message game-won">You Win! Congratulations!</div>}
    </div>
  );
};

export default GamePage;

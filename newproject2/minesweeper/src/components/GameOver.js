import React from 'react';

const GameOver = ({ message, onRestart }) => {
  return (
    <div className="game-over">
      <p>{message}</p>
      <button onClick={onRestart}>Restart</button> {/* 只显示在游戏结束时 */}
    </div>
  );
};

export default GameOver;

// src/components/Cell.js
import React from 'react';

const Cell = ({ row, col, value, isRevealed, onClick }) => {
  const cellClass = isRevealed
    ? value === 'M'
      ? 'revealed bomb' // 点击炸弹时加入 bomb 类
      : 'revealed'
    : '';

  return (
    <div
      className={`cell ${cellClass}`}
      onClick={() => onClick(row, col)}
    >
      {isRevealed ? (value === 'M' ? '💣' : value) : ''}
    </div>
  );
};

export default Cell;

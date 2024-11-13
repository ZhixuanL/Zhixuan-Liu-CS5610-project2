import React from 'react';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate

const DifficultySelector = ({ difficulty, onDifficultyChange }) => {
  const navigate = useNavigate(); // 获取 navigate 函数

  const handleChange = (event) => {
    const selectedDifficulty = event.target.value;
    onDifficultyChange(selectedDifficulty); // 更新本地状态
    navigate(`/game/${selectedDifficulty}`); // 更改 URL
  };

  return (
    <div>
      <h3>Select Difficulty:</h3>
      <select value={difficulty} onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultySelector;

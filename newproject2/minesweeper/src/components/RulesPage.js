// src/components/RulesPage.js
import React from 'react';

const RulesPage = () => {
  return (
    <div className="rules-page">
      <h1>Game Rules</h1>
      <p>Here are the rules of the game:</p>
      <ul>
        <li>The goal is to reveal all the cells without triggering mines.</li>
        <li>Click on a cell to reveal it. A number indicates how many mines are adjacent to that cell.</li>
        <li>If you reveal a mine, the game is over!</li>
        <li>Good luck!</li>
      </ul>
    </div>
  );
};

export default RulesPage;

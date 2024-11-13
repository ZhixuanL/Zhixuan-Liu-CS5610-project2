// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Game!</h1>
      <p>Choose your adventure and start playing.</p>
      <Link to="/game">Go to Game</Link> {/* 跳转到游戏页面 */}
      <br />
      <Link to="/rules">See Game Rules</Link> {/* 跳转到规则页面 */}
    </div>
  );
};

export default HomePage;

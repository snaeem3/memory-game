import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import logo from './logo.svg';
// import './App.css';
import CardGrid from './components/CardGrid';
import { flags } from './flagData';

const App = () => {
  // Set every card as unselected
  const unselectedFlags = flags.map((obj) => ({
    ...obj,
    selected: false,
  }));

  const [grid, setGrid] = useState(unselectedFlags);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const setSelected = (givenID) => {
    const gridIndex = grid.findIndex((item) => item.id === givenID);
    const updatedGrid = [...grid]; // copies current grid
    updatedGrid[gridIndex] = { ...updatedGrid[gridIndex], selected: true };
    setGrid(updatedGrid);
  };

  // const incrementScore = () => setScore(score + 1);
  function incrementScore() {
    setScore(score + 1);
  }

  function resetGame() {
    const updatedGrid = [...grid];
    setGrid(unselectAllObjects(updatedGrid));
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);

    function unselectAllObjects(array) {
      const updatedArray = array.map((obj) => ({
        ...obj,
        selected: false,
      }));
      return updatedArray;
    }
  }

  const handleClick = (event) => {
    const clickedID = event.currentTarget.id;
    const gridIndex = grid.findIndex((item) => item.id === clickedID);
    // Check if current card has been selected
    if (grid[gridIndex].selected) {
      // If so, end game
      resetGame();
    } else {
      // Else mark card as selected and increment score
      setSelected(clickedID);
      incrementScore();
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
      </header>
      <div id="score-board">
        <div id="current-score">Score: {score}</div>
        <div id="best-score">Best Score: {bestScore}</div>
      </div>
      <CardGrid grid={grid} handleClick={handleClick} />
      <div className="instructions-container">
        <ol>
          <li>Click on any card to start the game</li>
          <li>Each click earns you one point</li>
          <li>If you click the same image twice, you lose the game</li>
          <li>Keep clicking different images to increase your score</li>
          <li>The highest score achieved will be your Best Score.</li>
        </ol>
      </div>
    </div>
  );
};

export default App;

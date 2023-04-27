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
      <header>Memory Game</header>
      <CardGrid grid={grid} handleClick={handleClick} />
      <div id="score-board">
        Score: {score}
        Best Score: {bestScore}
      </div>
    </div>
  );
};

export default App;

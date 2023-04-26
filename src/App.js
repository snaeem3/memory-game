import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import logo from './logo.svg';
import './App.css';
import CardGrid from './components/CardGrid';

const App = () => {
  const [grid, setGrid] = useState([
    { id: uniqid(), name: 'A', selected: false },
    { id: uniqid(), name: 'B', selected: false },
    { id: uniqid(), name: 'C', selected: false },
    { id: uniqid(), name: 'D', selected: false },
    { id: uniqid(), name: 'E', selected: false },
    { id: uniqid(), name: 'F', selected: false },
  ]); // Category to add later: Flags

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

  const handleClick = (event) => {
    const clickedID = event.target.id;
    const gridIndex = grid.findIndex((item) => item.id === clickedID);
    // Check if current card has been selected
    if (grid[gridIndex].selected) {
      // If so, end game
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
      Score: {score}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import logo from './logo.svg';
// import './App.css';
import CardGrid from './components/CardGrid';
import { flags } from './flagData';

const App = () => {
  // const [grid, setGrid] = useState([
  //   {
  //     id: uniqid(),
  //     name: 'A',
  //     selected: false,
  //     imgSrc: `/images/flags/Flag_of_Canada.svg`,
  //   },
  //   { id: uniqid(), name: 'B', selected: false },
  //   { id: uniqid(), name: 'C', selected: false },
  //   { id: uniqid(), name: 'D', selected: false },
  //   { id: uniqid(), name: 'E', selected: false },
  //   { id: uniqid(), name: 'F', selected: false },
  // ]); // Category to add later: Flags
  const [grid, setGrid] = useState(flags);

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
    const clickedID = event.target.id;
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
      Score: {score}
      Best Score: {bestScore}
      {/* <img src={require('./images/flags/Flag_of_Canada.svg')} alt="flag" /> */}
      {/* <img src={require('./images/flags/Flag_of_Canada.svg')} alt="flag" /> */}
    </div>
  );
};

export default App;

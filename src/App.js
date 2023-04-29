import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

    document.querySelector('#current-score').classList.remove('hidden');
    document.querySelector('#best-score').classList.remove('hidden');
    document.querySelector('#result').classList.add('hidden');
    document.querySelector('#result').textContent = '';

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

    // event.currentTarget.classList.add('clicked');
    animateCards(document.querySelectorAll('.card'));

    // Check if current card has been selected
    if (grid[gridIndex].selected) {
      // If so, end game
      document.documentElement.style.setProperty(
        '--scoreboard-color',
        '#d91616' // red
      );
      resetGame();
    } else {
      // Else mark card as selected and increment score
      setSelected(clickedID);
      incrementScore();
      document.documentElement.style.setProperty(
        '--scoreboard-color',
        '#32a836' // green
      );
    }

    function animateCards(cards) {
      const newspaperSpinning = [
        { transform: 'rotate3d(0, 1, 0, 0deg) scale(1)' },
        { transform: 'rotate3d(0, 1, 0, 360deg) scale(1)' },
      ];

      const newspaperTiming = {
        duration: 500,
        iterations: 1,
      };

      cards.forEach((card) => {
        card.animate(newspaperSpinning, newspaperTiming);
      });
    }
  };

  useEffect(() => {
    if (score >= grid.length) {
      // Player wins
      document.querySelector('#current-score').classList.add('hidden');
      document.querySelector('#best-score').classList.add('hidden');
      document.querySelector('#result').classList.remove('hidden');
      document.querySelector('#result').textContent = 'YOU WIN!';
    }
  }, [grid.length, score]);

  return (
    <div className="App">
      <Helmet>
        <title>Memory Game</title>
      </Helmet>
      <header>
        <h1>Memory Game</h1>
      </header>
      <div id="score-board">
        <div id="current-score">Score: {score}</div>
        <div id="result" className="hidden" />
        <div id="best-score">Best Score: {bestScore}</div>
      </div>
      <CardGrid grid={grid} handleClick={handleClick} />
      <div className="instructions-container">
        <h2>How To Play</h2>
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

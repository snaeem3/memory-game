import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardGrid = (props) => {
  const { grid, handleClick } = props;
  const shuffledGrid = shuffle([...grid]);
  return (
    <div className="card-grid">
      {shuffledGrid?.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          id={cardInfo.id}
          name={cardInfo.name}
          handleClick={handleClick}
        />
      ))}
    </div>
  );

  function shuffle(array) {
    // Fisher-Yates (aka Knuth) shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
};

export default CardGrid;

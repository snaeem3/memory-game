import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardGrid = (props) => {
  const { grid, handleClick } = props;
  return (
    <div className="card-grid">
      {grid?.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          id={cardInfo.id}
          name={cardInfo.name}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default CardGrid;

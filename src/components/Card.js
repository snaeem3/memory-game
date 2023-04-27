import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const { id, name, handleClick, imgSrc } = props;
  return (
    <div className="card" id={id} onClick={handleClick} aria-hidden="true">
      {name}
      <img src={imgSrc} alt={name} />
    </div>
  );
};

export default Card;

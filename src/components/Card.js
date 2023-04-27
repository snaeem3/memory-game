import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const { id, name, handleClick, imgSrc } = props;
  const style = `style: --background-url: ${imgSrc}`;
  return (
    <div className="card" id={id} onClick={handleClick} aria-hidden="true">
      <img src={imgSrc} alt={name} className="flag-image" />
      {name}
    </div>
  );
};

export default Card;

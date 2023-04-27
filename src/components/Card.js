import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const { id, name, handleClick, imgSrc } = props;
  const style = `style: --background-url: ${imgSrc}`;
  return (
    <figure
      className="card clickable"
      id={id}
      onClick={handleClick}
      aria-hidden="true"
    >
      <img src={imgSrc} alt={name} className="flag-image  box-shadow" />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default Card;

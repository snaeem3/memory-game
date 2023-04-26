import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const { id, name, handleClick } = props;
  return (
    <div className="card" id={id} onClick={handleClick} aria-hidden="true">
      {name}
    </div>
  );
};

export default Card;

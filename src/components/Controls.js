import React  from 'react';

const Controls = ({decrementZoom, incrementZoom}) => (
  <div className="Controls">
    <button onClick={decrementZoom}>-</button>
    <button onClick={incrementZoom}>+</button>
  </div>
);

export default Controls;

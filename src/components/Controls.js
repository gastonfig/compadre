import React from 'react';

const Controls = ({
  decrementZoom,
  handleOpacityChange,
  incrementZoom,
  opacity,
  zoom
}) => (
  <div className="Controls">
    <button onClick={decrementZoom}>-</button>
    <button onClick={incrementZoom}>+</button>
    <span>{Math.round(zoom * 100)}%</span>
    <input
      type="range"
      min="0"
      max="1"
      onChange={handleOpacityChange}
      step="0.1"
    />
  </div>
);

export default Controls;

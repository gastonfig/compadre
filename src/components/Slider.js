import React from 'react';

import './Slider.css';

const Slider = ({ label, min, max, onChange, step, value }) => (
  <div className="SliderContainer">
    <span className="SliderLabel">{label}</span>
    <input type="range" min={min} max={max} onChange={onChange} step={step} />
    <span className="SliderValue">{Math.round(value * 100)}%</span>
  </div>
);

export default Slider;

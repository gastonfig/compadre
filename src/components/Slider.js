import React from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

const Slider = ({ label, min, max, onChange, step, value }) => (
  <div className="SliderContainer">
    <span className="SliderLabel">{label}</span>
    <input type="range" min={min} max={max} onChange={onChange} step={step} />
    <span className="SliderValue">{Math.round(value * 100)}%</span>
  </div>
);

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
};

export default Slider;

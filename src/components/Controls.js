import React from 'react';
import PropTypes from 'prop-types';

import './Controls.css';

import Slider from './Slider';

const Controls = ({ handleOpacityChange, handleZoomChange, opacity, zoom }) => (
  <div className="Controls">
    <Slider
      label="zoom"
      min={0.1}
      max={2}
      onChange={handleZoomChange}
      step={0.05}
      value={zoom}
    />
    <Slider
      label="opacity"
      min={0}
      max={1}
      onChange={handleOpacityChange}
      step={0.1}
      value={opacity}
    />
  </div>
);

Controls.propTypes = {
  handleOpacityChange: PropTypes.func.isRequired,
  handleZoomChange: PropTypes.func.isRequired,
  opacity: PropTypes.string.isRequired,
  zoom: PropTypes.string.isRequired
};

export default Controls;

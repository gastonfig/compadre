import React from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';

import './Titlebar.css';

const Titlebar = ({
  fileName,
  handleImageLoad,
  handleOpacityChange,
  handleZoomChange,
  opacity,
  zoom
}) => (
  <div className="Titlebar">
    <button className="loadButton" onClick={handleImageLoad}>
      {fileName || 'Load image'}
    </button>
    <Controls
      handleOpacityChange={handleOpacityChange}
      handleImageLoad={handleImageLoad}
      handleZoomChange={handleZoomChange}
      opacity={opacity}
      zoom={zoom}
    />
  </div>
);

Titlebar.propTypes = {
  fileName: PropTypes.string,
  handleImageLoad: PropTypes.func.isRequired,
  handleOpacityChange: PropTypes.func.isRequired,
  handleZoomChange: PropTypes.func.isRequired,
  opacity: PropTypes.string.isRequired,
  zoom: PropTypes.string.isRequired
};

export default Titlebar;

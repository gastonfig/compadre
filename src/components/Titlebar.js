import React from 'react';

import Controls from './Controls';

import './Titlebar.css';

const Titlebar = ({
  decrementZoom,
  fileName,
  handleImageLoad,
  handleOpacityChange,
  handleZoomChange,
  incrementZoom,
  opacity,
  zoom
}) => (
  <div className="Titlebar">
    <button className="loadButton" onClick={handleImageLoad}>
      {fileName || 'Load an image…'}
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

export default Titlebar;

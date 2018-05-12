import React from 'react';

import Controls from './Controls';

import './Titlebar.css';

const Titlebar = ({
  decrementZoom,
  handleImageLoad,
  handleOpacityChange,
  handleZoomChange,
  incrementZoom,
  opacity,
  zoom
}) => (
  <div className="Titlebar">
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

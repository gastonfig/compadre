import React from 'react';
import PropTypes from 'prop-types';

const Comp = ({ image, opacity, zoom }) => {
  const style = {
    opacity: opacity,
    transform: `scale(${zoom})`
  };

  return (
    <img
      alt=""
      className="Comp"
      src={'data:image/png;base64, ' + image}
      style={style}
    />
  );
};

Comp.propTypes = {
  image: PropTypes.string.isRequired,
  opacity: PropTypes.string.isRequired,
  zoom: PropTypes.string.isRequired
};

export default Comp;

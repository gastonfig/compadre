import React from 'react';

const Comp = ({ image, opacity, zoom }) => {
  const style = {
    opacity: opacity,
    transform: `scale(${zoom})`
  };

  return <img alt="" className="Comp" src={image} style={style} />;
};

export default Comp;

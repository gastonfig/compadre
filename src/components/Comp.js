import React  from 'react';

const Comp = ({image, zoom}) => {
  const style = {
    transform: `scale(${zoom})`,
  }

  return (
    <img
      alt=""
      className="Comp"
      src={image}
      style={style}
    />
  )
}

export default Comp;

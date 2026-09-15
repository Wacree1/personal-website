import React from 'react';
import icon_img from '../assets/IMG_6628.png'

function Icon() {
  const iconStyle = {
    width: '440px',
    height: '600px',
    borderRadius: '50%',
    borderColor: 'gray',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundImage: `url(${icon_img})`,
    backgroundSize: '140%',
    backgroundPosition: 'center 55%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
  };

  return (
    <div style={iconStyle} aria-label="Website Icon" />
  );
}

export default Icon;

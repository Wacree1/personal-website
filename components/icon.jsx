import React from 'react';
import icon_img from '../assets/IMG_6628.png'

function Icon() {
  const iconStyle = {
    width: 'var(--site-icon-size, 60px)',
    height: 'var(--site-icon-size, 60px)',
    borderRadius: '50%',
    backgroundImage: `url(${icon_img})`,
    backgroundSize: '140%',
    backgroundPosition: 'center 40%',
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

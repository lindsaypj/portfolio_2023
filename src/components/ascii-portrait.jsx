import React, { useEffect, useRef } from "react";

import '../styles/ascii.css';

import AsciiImgLarge from '../resources/images/AsciiPortrait/ascii-large.png';
import AsciiImgSmall from '../resources/images/AsciiPortrait/ascii-small.png';
import { useCallback } from "react";

export default function AsciiPortrait({ visible, mobileMode = true }) {
  const ascii = useRef();

  const getAsciiSrc = useCallback(() => {
    if (mobileMode) {
      return AsciiImgSmall;
    }
    return AsciiImgLarge;
  }, [mobileMode]);

  // Update loading class after animaion ends
  useEffect(() => {
    ascii.current.addEventListener('animationend', (event) => {
      ascii.current.className = 'ascii';
    });
  }, []);

  useEffect(() => {
    if (visible) {
      ascii.current.style.visibility = 'visible';
    }
    else {
      ascii.current.style.visibility = 'hidden';
    }
  }, [visible]);

  return (
    <div className='ascii-container'>
      <img
        ref={ascii}
        src={getAsciiSrc()}
        className='ascii-loading'
        alt='Ascii art self-portrait'
      />
    </div>
    
  );
}
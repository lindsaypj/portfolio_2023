import React, { useEffect, useRef } from "react";

import '../styles/ascii.css';
import AsciiImg from '../resources/images/AsciiPortrait/ascii-large.png';

export default function AsciiPortrait({ visible }) {
  const ascii = useRef();

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
        src={AsciiImg}
        className='ascii-loading'
        alt='Ascii art self-portrait'
      />
    </div>
    
  );
}
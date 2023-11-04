import React, { useEffect, useRef } from "react";

import '../styles/ascii.css';
import AsciiImg from '../resources/images/AsciiPortrait/ascii-large.png';

export default function AsciiPortrait({ visible }) {
  const frame = useRef();

  useEffect(() => {
    if (visible) {
      frame.current.style.visibility = 'visible';
    }
    else {
      frame.current.style.visibility = 'hidden';
    }
  }, [visible]);

  return (
    <div className='ascii-container'>
      <img
        ref={frame}
        src={AsciiImg}
        className='ascii'
        alt='Ascii self-portrait'
      />
    </div>
    
  );
}
import React from "react";

import '../styles/Cursor.css';

export default function Cursor({ cursorRef, className, hide = false }) {
  if (hide) {
    return (
      <span ref={cursorRef} className={"cursor " + className}></span>
    );
  }
  else {
    return (
      <span ref={cursorRef} className={"cursor " + className}>█</span>
    );
  }
  
}
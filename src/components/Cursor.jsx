import React from "react";

import '../styles/Cursor.css';

export default function Cursor({ cursorRef, className }) {
  return (
    <span ref={cursorRef} className={"cursor " + className}>█</span>
  );
}
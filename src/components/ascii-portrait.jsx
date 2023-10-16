import React, { useEffect, useRef } from "react";

import '../styles/ascii.css';

export default function AsciiPortrait({ visible }) {
  const frame = useRef();

  useEffect(() => {
    if (visible) {
      frame.current.style.visibility = "visible";
    }
    else {
      frame.current.style.visibility = "hidden";
    }
  }, [visible]);

  return (
    <iframe
      ref={frame}
      src="ascii-art.html"
      className="ascii-frame2"
      title="Ascii self-portrait"
    ></iframe>
  );
}
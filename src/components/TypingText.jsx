import React, { useState, useEffect } from "react"
import Cursor from "./Cursor";

export default function TypingText({
  text,                          // Text to be rendered
  charInterval = 100,            // Interval to type each char
  shouldType = true,             // Boolean to determine when to start typing
  doneTypingCallback = () => {}, // Callback triggered when all chars rendered/typed
  skipInitAnimation = false,     // Flag to render text immediatly without animating
  fillUnrenderedSpace = true,    // Flag to make unrendered text take up the same space as when rendered
  useCursor = false              // Flag to render cursor when typing
}) {
  const [renderedText, setRenderedText] = useState(" ");
  const [hiddenText, setHiddenText] = useState(text);
  const [cursorClass, setCursorClass] = useState("d-none");
    
  useEffect(() => {
    if (shouldType) {
      const interval = setInterval(() => {
        if (text === renderedText) {
          doneTypingCallback();
          clearInterval(interval);
          setCursorClass("d-none");
        }

        // Show cursor if applicable
        if (useCursor) {
          setCursorClass("");
        }

        // Determine type direction (add or delete)
        if (text.length > renderedText.length) {
          setRenderedText(text.slice(0, renderedText.length+1));
          setHiddenText(text.slice(renderedText.length+1));
        }
        else if (text.length < renderedText.length) {
          setRenderedText(renderedText.slice(0, renderedText.length - 1));
        }
        else {
          setRenderedText(text);
          setCursorClass("d-none");
        }
      }, charInterval);
      return () => clearInterval(interval);      
    }
    // eslint-disable-next-line
  }, [text, renderedText, shouldType, charInterval]);
  
  if (skipInitAnimation && renderedText === " ") {
    return <>{text}</>
  }
  else if (!fillUnrenderedSpace) {
    return <>{renderedText}<Cursor className={cursorClass} /></>
  }

  return (
    <>{renderedText}<Cursor className={cursorClass} /><span className="hidden">{hiddenText}</span></>
  )
}
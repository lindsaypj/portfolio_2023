import React, { useRef, useEffect, useState } from "react";

import TypingText from './TypingText';

import '../styles/Terminal.css';
import '../styles/Cursor.css';
import Cursor from "./Cursor";

export default function Terminal({ navChangeCallback, shouldType, heroMode }) {
  const MAX_CHAR_COUNT = 20;

  const terminal = useRef();
  const commandLine = useRef();
  const terminalTextOverlay = useRef();
  const cursor = useRef();

  const [terminalText, setTerminalText] = useState('');

  // Initial load
  useEffect(() => {
    if (shouldType) {
      setFocus();
    }
    else {
      cursor.current.classList.add('hide');
    }
  }, [shouldType]);

  // Handle heroMode transitions
  useEffect(() => {
    if (heroMode) {
      commandLine.current.classList.add('command-line-hero');
    }
    else {
      commandLine.current.classList.remove('command-line-hero');
    }
  }, [heroMode]);

  const updateCursorPos = (nextCursorPos) => {
    cursor.current.style.marginLeft = -(terminal.current.value.length - nextCursorPos) + 'ch';
  }

  // Event handlers
  const setFocus = () => {
    terminal.current.focus();
  }

  const handleTerminalCursorPosChange = (event) => {
    const nextCursorPos = event.target.selectionStart;
    updateCursorPos(nextCursorPos);
  }

  const handleClickTerminal = (event) => {
    if (event?.target.classList.contains('terminal-click')) {
      setFocus();
      const nextCursorPos = terminal.current.value.length
      terminal.current.selectionStart = nextCursorPos;
      updateCursorPos(nextCursorPos);
    }
  }

  const handleInputBlur = (event) => {
    if (!event.target.classList.contains('terminal-ignore-blur')) {
      cursor.current.classList.add('hide');
    }
  }

  const handleOnChange = (event) => {
    handleTerminalCursorPosChange(event);

    const input = event.target;

    // Update input/text width
    const nextWidth = input.value.length;
    input.style.width = Math.min(nextWidth, MAX_CHAR_COUNT)+'ch';
    terminalTextOverlay.current.style.width = Math.min(nextWidth, MAX_CHAR_COUNT)+'ch';

    // Update text content to match input
    if (nextWidth > MAX_CHAR_COUNT) {
      input.value = input.value.substr(0, MAX_CHAR_COUNT);
    }
    setTerminalText(input.value);
  }

  const handleInputTextSelct = (event) => {
    event.target.selectionStart = event.target.selectionEnd;
  }

  return (
    <div
      className='terminal terminal-dark terminal-ignore-blur'
      onClick={setFocus}
    >
      <span className='terminal-arrow terminal-ignore-blur'>
        {'> '}
      </span> 
      <div
        ref={commandLine}
        className='command-line terminal-ignore-blur terminal-click'
        onClick={handleClickTerminal}
      >
        <p
          className="p-0 m-0 terminal-ignore-blur terminal-click"
          onClick={handleClickTerminal}
        >
          
          <span className='command-prefix terminal-ignore-blur'>
            <TypingText
              text='patrick_lindsay'
              charInterval={50}
              shouldType={shouldType}
              fillUnrenderedSpace={false}
            />
          </span>
          <input
            ref={terminal}
            className='terminal-input'
            type='text'
            spellCheck="false"
            onFocus={() => {cursor.current.classList.remove('hide')}}
            onBlur={handleInputBlur}
            onSelect={handleInputTextSelct}
            onKeyUp={handleTerminalCursorPosChange}
            onKeyDown={handleTerminalCursorPosChange}
            onClick={handleTerminalCursorPosChange}
            onChange={handleOnChange}
          />
          <span ref={terminalTextOverlay} className='terminal-text-overlay terminal-ignore-blur'>
            {terminalText}
          </span>
          
          <Cursor cursorRef={cursor} />
        </p>
      </div>
    </div>
  );
}
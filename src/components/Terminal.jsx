import React, { useRef, useEffect, useState, useCallback } from "react";

import Cursor from "./Cursor";
import TypingText from './TypingText';
import RoutesPopover from "./RoutesPopover";

import '../styles/Terminal.css';
import '../styles/Cursor.css';

import RouteTree from '../objects/RouteTree';
import { PRIMARY_ROUTES } from "../resources/text/routes";

const routeTree = new RouteTree();

export default function Terminal({ navChangeCallback, currentRoute, shouldTypePrefix, heroMode }) {
  const MAX_CHAR_COUNT = 20;

  const terminal = useRef();
  const commandLine = useRef();
  const terminalTextOverlay = useRef();
  const cursor = useRef();

  const [terminalText, setTerminalText] = useState(currentRoute);
  const [abbriviatePrefix, setAbbriviatePrefix] = useState(false);
  const [partialRoutes, setPartialRoutes] = useState(routeTree.getRoutes(currentRoute));
  const [validPath, setValidPath] = useState(false);
  const [terminalHasFocus, setTerminalHasFocus] = useState(true);


  // Handle heroMode transitions
  useEffect(() => {
    if (heroMode && terminalText.length === 0) {
      commandLine.current.classList.add('command-line-hero');
      setAbbriviatePrefix(true);
    }
    else {
      commandLine.current.classList.remove('command-line-hero');
      setAbbriviatePrefix(false);
    }
  }, [heroMode, terminalText]);

  const updateCursorPos = (nextCursorPos) => {
    cursor.current.style.marginLeft = -(terminal.current.value.length - nextCursorPos) + 'ch';
  }

  // Update autocomplete routes
  const checkForValidPath = useCallback((possiblePath) => {
    const possibleRoutes = routeTree.getRoutes(possiblePath);
    setValidPath(possibleRoutes.includes(possiblePath));
    if (possiblePath === '/') {
      setPartialRoutes(PRIMARY_ROUTES);
    }
    else {
      setPartialRoutes(possibleRoutes.filter(route => route !== possiblePath));
    }
  }, []);

  const setFocus = useCallback((event) => {
    if (!event || !event.target.classList.contains('terminal-ignore-focus')) {
      terminal.current.focus();
      setTerminalHasFocus(true);
    }
  }, []);

  // When Route updates
  useEffect(() => {
    if (currentRoute === '/about_me') {
      terminal.current.value = '';
      setTerminalText('');
      setFocus();
    }
    else {
      terminal.current.value = currentRoute;
      setTerminalText(currentRoute);
    }
  }, [currentRoute, setFocus]);

  // Handle delayed prefix typing
  useEffect(() => {
    if (shouldTypePrefix) {
      setFocus();
    }
    else {
      cursor.current.classList.add('hide');
    }
  }, [shouldTypePrefix, setFocus]);


  // EVENT HANDLERS

  const handleNavCallback = useCallback((route) => {
    switch(route) {
      case '/about_me':
        terminal.current.value = '';
        setTerminalText('');
        setPartialRoutes([]);
        navChangeCallback('');
        break;
      default:
        navChangeCallback(route);
        setTerminalHasFocus(false);
    }
  },[navChangeCallback]);

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
      setTerminalHasFocus(false);
    }
  }

  const handleKeyUp = (event) => {
    handleTerminalCursorPosChange(event);
    if (validPath) {
      if (event.key === 'Enter' || event.key === 'Accept') {
        handleNavCallback(terminalText);
      }
    }
  }

  const handleOnChange = (event) => {
    handleTerminalCursorPosChange(event);
    setTerminalHasFocus(true);
    const input = event.target;

    // Update input/text width
    const nextWidth = input.value.length;
    input.style.width = Math.min(nextWidth, MAX_CHAR_COUNT)+'ch';
    terminalTextOverlay.current.style.width = Math.min(nextWidth, MAX_CHAR_COUNT)+'ch';

    // Update text content to match input
    if (nextWidth > MAX_CHAR_COUNT) {
      input.value = input.value.slice(0, MAX_CHAR_COUNT);
    }
    setTerminalText(input.value);
    checkForValidPath(input.value);
  }

  const handleInputTextSelct = (event) => {
    event.target.selectionStart = event.target.selectionEnd;
  }

  const handleAutocompleteSelection = useCallback((selection) => {
    // Update input
    terminal.current.value = selection;
    // Update Overlay
    setTerminalText(selection);
    // Update RouteTree
    checkForValidPath(selection);
    // Execute route
    handleNavCallback(selection);
  }, [checkForValidPath, handleNavCallback]);


  // RENDERING 
  const getTerminalPrefix = useCallback(() => {
    return abbriviatePrefix ? 'patrick_lindsay' : 'pl';
  }, [abbriviatePrefix]);

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
        <div
          className="p-0 m-0 terminal-ignore-blur terminal-click"
          onClick={handleClickTerminal}
        >
          {/* Command Prefix: patrick_lindsay | pl */}
          <span className='command-prefix terminal-ignore-blur  command-line-text'>
            <TypingText
              text={getTerminalPrefix()}
              charInterval={50}
              shouldType={shouldTypePrefix}
              fillUnrenderedSpace={false}
            />
          </span>

          {/* Autocomplete menu */}
          <RoutesPopover
            routes={partialRoutes}
            override={terminalHasFocus}
            selectionCallback={handleAutocompleteSelection}
          />

          {/* Terminal Input (Not visible) */}
          <input
            ref={terminal}
            className='terminal-input'
            type='text'
            spellCheck="false"
            onFocus={() => {cursor.current.classList.remove('hide')}}
            onBlur={handleInputBlur}
            onSelect={handleInputTextSelct}
            onKeyUp={handleKeyUp}
            onKeyDown={handleTerminalCursorPosChange}
            onClick={handleTerminalCursorPosChange}
            onChange={handleOnChange}
          />

          {/* Terminal Text */}
          <span ref={terminalTextOverlay} className='terminal-text-overlay terminal-ignore-blur command-line-text'>
            {terminalText}
          </span>

          {/* Terminal Cursor */}
          <Cursor cursorRef={cursor} className='command-line-text' />
        </div>
      </div>
    </div>
  );
}
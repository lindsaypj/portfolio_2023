import React, { useRef, useEffect, useState, useCallback } from "react";

import Cursor from "../Cursor";
import RoutesPopover from "./RoutesPopover";

import '../../styles/Terminal.css';
import '../../styles/Cursor.css';

import RouteTree from '../../objects/RouteTree';
import { PRIMARY_ROUTES, CLEAR_AFTER_EXE, commandFunctions } from "../../resources/text/routes";

const routeTree = new RouteTree();

export default function Terminal({ navChangeCallback, currentRoute, terminalHasFocus, setTerminalHasFocus }) {
  const MAX_CHAR_COUNT = routeTree.getMaxRouteLength();

  const terminal = useRef();
  const commandLine = useRef();
  const terminalTextOverlay = useRef();
  const cursor = useRef();

  const initPartialRoutes = routeTree.getRoutes(currentRoute)[0];

  const [terminalText, setTerminalText] = useState(currentRoute);
  const [partialRoutes, setPartialRoutes] = useState(initPartialRoutes);
  const [validPath, setValidPath] = useState(false);


  const updateCursorPos = (nextCursorPos) => {
    cursor.current.style.marginLeft = -(terminal.current.value.length - nextCursorPos) + 'ch';
  }

  // Update autocomplete routes
  const updateAutocomplete = useCallback((possiblePath) => {
    const [possibleRoutes, hiddenRoutes] = routeTree.getRoutes(possiblePath);
    setValidPath(possibleRoutes.includes(possiblePath) || hiddenRoutes.includes(possiblePath));
    setPartialRoutes(possibleRoutes.filter(route => route !== possiblePath));
  }, []);

  const setFocus = useCallback((event) => {
    if (!event || !event.target.classList.contains('terminal-ignore-focus')) {
      terminal.current.focus();
      setTerminalHasFocus(true);
      cursor.current.classList.remove('hide');
    }
  }, [setTerminalHasFocus]);

  // When Route updates
  useEffect(() => {
    if (CLEAR_AFTER_EXE[currentRoute]) {
      terminal.current.value = '';
      setTerminalText('');
    }
    else {
      terminal.current.value = currentRoute;
      setTerminalText(currentRoute);
      updateAutocomplete(currentRoute);
    }
    terminal.current.blur();
    setTerminalHasFocus(false);
  }, [currentRoute, updateAutocomplete, setTerminalHasFocus]);


  // EVENT HANDLERS

  const handleNavCallback = useCallback((route) => {
    if (commandFunctions[route]) {
      commandFunctions[route]();
      terminal.current.blur();
      setTerminalHasFocus(false);
    }
    else {
      switch(route) {
        case '/':
        case '/about_me':
          navChangeCallback('');
          break;
        default:
          navChangeCallback(route);
      }
    }
    if (CLEAR_AFTER_EXE[route]) {
      terminal.current.value = '';
      setTerminalText('');
      setPartialRoutes([]);
    }
  },[setTerminalHasFocus, navChangeCallback]);

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
    updateAutocomplete(input.value);
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
    updateAutocomplete(selection);
    // Execute route
    handleNavCallback(selection);
  }, [updateAutocomplete, handleNavCallback]);


  // RENDERING 

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
          <Cursor cursorRef={cursor} className='command-line-text hide' />
        </div>
      </div>
    </div>
  );
}
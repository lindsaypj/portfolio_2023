import React, { useReducer, useState } from 'react';
import { useEffect, useLayoutEffect, useCallback } from 'react';

import '../styles/cell.css'

const COLORS = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'magenta',
                'cyan', 'lime', 'pink', 'crimson', 'dark-purple', 'dark-cyan', 'gray', 'navy', 'fire'];
const INPUT_PATTERNS = {4:'[0-4]', 9:'[0-9]', 16:'[0-9]|1[0-6]'};


function Cell({
    cellIndex,
    size,
    value,
    cellUpdateCallback,
    boardIndex,
    textVisibility,
    disabled,
    error,
    onFocusCallback,
    highlighted
}) {

  ////   STATE INITIALIZATION   ////

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState(value);

  // (prevents unwated input values)
  const [inputPattern, setInputPattern] = useState(INPUT_PATTERNS[size]);
  
  // Background Color
  const [cellBGColor, setCellBGColor] = useReducer(() => {
    if (textVisibility) {
      if (error) {
        return 'error'
      }
      else if (highlighted) {
        return 'highlighted'
      }
      else {
        return 'transparent';
      }
    }
    return COLORS[displayValue];
  }, value);

  // Text Color
  const [cellTextColor, setCellTextColor] = useReducer(() => {
    if (displayValue === 0 || displayValue === '0') {
      return 'transparent';
    }
    else if (textVisibility) {
      if (disabled) {
        return 'disabled';
      }
      return 'default';
    }
    return COLORS[displayValue];
  }, displayValue);


  ////   STATE MANAGMENT   ////

  useLayoutEffect(() => {
    setDisplayValue(value);
    setCellBGColor();
    setCellTextColor();
  }, [value, size]);
    

  // Render display value on input update
  function handleNewInputValue(newValue) {
    // Clear input value unless expecting second digit
    if (size > 9) {
      if (newValue === '0' || newValue === 0) {
        setInputValue('');
      }
      else {
        setInputValue(newValue);
      }
    }
    else {
      setInputValue('');
    }
      
    // Set the Display value (prevent value from being '')
    if (newValue === 0 || newValue === '') {
      setDisplayValue(0);
      // Update board state
      cellUpdateCallback(cellIndex, 0);
    }
    else {
      setDisplayValue(newValue);
      // Update board state
      cellUpdateCallback(cellIndex, Number.parseInt(newValue));
    }

    // Set cell colors
    setCellBGColor();
    setCellTextColor();
  }

  // Update Cell Color/text visibility
  useLayoutEffect(() => {
    setCellBGColor();
    setCellTextColor();
  }, [textVisibility, displayValue, highlighted, error]);

  // Set Input pattern on size change
  useEffect(() => {
    setInputPattern(INPUT_PATTERNS[size]);
  },[size]);


  // CELL FOCUS/BLUR HANDLERS
  const handleBackspace = useCallback((event) => {
    // Handle deleteing input value
    if (event.key === 'Backspace' || event.key === 'Delete') {
      setInputValue(0);
    }
  }, []);

  function onCellFocus(event) {
    document.addEventListener('keydown', handleBackspace, false);
    onFocusCallback(cellIndex)
  }

  function onCellBlur(event) {
    document.removeEventListener('keydown', handleBackspace, false);
    onFocusCallback(null)
  }

  return (
    <div className={'cellContainer cell-height-'+size}>
      <p className={'cellDisplay size-'+size + ' cell-text-'+cellTextColor}>{displayValue}</p>
      {/* Cell input element (Interactable) */}
      <input 
        type={'text'}
        className={'cell size-'+size+' cell-bg-'+cellBGColor+ ' cell-text-transparent'}
        tabIndex={boardIndex}
        pattern={inputPattern}
        value={inputValue}
        onFocus={onCellFocus}
        onBlur={onCellBlur}
        onChange={(e) => {
          if (!disabled) {
            handleNewInputValue(e.target.validity.valid ? e.target.value : inputValue);
          }   
        }}
      />
    </div>
  );
}

export default Cell;
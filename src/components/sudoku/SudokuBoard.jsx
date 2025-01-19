import { getHighlightedFromIndex } from "../../scripts/sudokuUtils.js";

import React, { useState, useLayoutEffect, useReducer, useCallback } from "react";
import Cell from "./Cell.jsx";

import '../../styles/board.css';

function SudokuBoard({ size, initialBoard, saveState, handleBoardUpdate, boardIndex, hideNums, conflicts }) {

  ////    STATE INITIALIZATION    ////

  const cellCount = size*size;
  const [cells, setCells] = useState([]);
  const [cellRows, setCellRows] = useReducer(() => {
    const rows = [];
    for (let row = 0; row < size; row++) {
      const cellCols = [];
      for (let col = 0; col < size; col++) {
        cellCols[col] = row * size + col;
      }
      rows[row] = cellCols;
    }
    return rows;
  }, []);

  const [highlighted, setHighlighted] = useReducer((state, index) => {
    return getHighlightedFromIndex(index, size)
  }, new Set());


  ////    STATE MANAGMENT    ////

  const isHighlighted = useCallback((cellIndex) => {
    return highlighted.has(cellIndex)
  }, [highlighted])

  // Callback to update the board when a cell is updated
  const updateCellOnBoard = (index, value) => {
    let valid = true;
    if (isNaN(index) || index < 0 || index > cells.length) {
      valid = false;
    }
    if (isNaN(value) || value < 0 || value > size) {
      valid = false;
    }

    // Update BoardState
    if (valid) {
      const updatedBoard = [...cells];
      updatedBoard[index] = value;
      setCells(updatedBoard);
      handleBoardUpdate(size, updatedBoard, index);
    }
  }


  ////    BOARD PRE-RENDERING    ////

  // Check if session data exists
  useLayoutEffect(() => {
    if (saveState !== null && saveState !== undefined && saveState.length === cellCount) {
      setCells(saveState);
    }
    // Check if initialBoard was passed
    else if (initialBoard !== undefined && initialBoard !== null && initialBoard.length === cellCount) {
      setCells(initialBoard);
    }
    // Load blank board
    else {
      setCells(new Array(cellCount).fill(0));
    }
  }, [saveState, initialBoard, size, cellCount]);
    

  ////    RENDER BOARD    ////

  // Generate Rows and cols to map through
  useLayoutEffect(() => {
    setCellRows();
    setHighlighted();
  }, [size]);

  // Determine cell editability
  const canEditCell = useCallback((index) => {
    if (initialBoard === undefined || initialBoard === null || initialBoard[index] === 0) {
      return false;
    }
    return true;
  }, [initialBoard]);
    

  return(
    <div className={"board board-"+ size}>
      {/* Map over rows */}
      {cellRows.map((row, rowIndex) => {
        return (
        <div key={rowIndex} className={'cell-row cell-row-'+size}>
          {row.map((cellValue, colIndex) => {
            const cellIndex = (rowIndex * size) + colIndex;
            
            return (
              <Cell
                key={cellIndex}
                cellIndex={cellIndex}
                size={size}
                value={cells[cellIndex]}
                cellUpdateCallback={updateCellOnBoard}
                textVisibility={!(hideNums)}
                boardIndex={boardIndex + cellIndex}
                disabled={canEditCell(cellIndex)}
                error={conflicts.includes(cellIndex)}
                onFocusCallback={setHighlighted}
                highlighted={isHighlighted(cellIndex)}
              />
            );
          })}
        </div>
        );
      })}
    </div>
  );
}

export default SudokuBoard;

import React, { useCallback, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import '../../styles/Maze.css';
import { getNeighborDirection } from "../../scripts/mazeUtils";


// Constants
const DIRECTIONS = ['n', 'e', 's', 'w'];

export default function Maze({ mazeWidth, mazeHeight, initMaze, mazePath, currentCell, solved }) {
  const windowSize = useWindowSize();
  const mazeRef = useRef();

  const getCellStyles = (pathArray) => {
    const classes = [];
    for (let i = pathArray.length - 1; i >= 0; i--) {
      classes.push('cell-' + DIRECTIONS[pathArray[i]]);
    }
    return classes.join(' ');
  };

  const getPathStyles = useCallback((index) => {
    const classes = [];
    if (index === currentCell) {
      classes.push('cell-current');
    }
    const pathIndex = mazePath.indexOf(index);
    if (pathIndex !== -1) classes.push('cell-traveled');
    if (pathIndex > 0) {
      const direction = getNeighborDirection(index, mazePath[pathIndex - 1]);
      classes.push('cell-traveled-' + DIRECTIONS[direction]);
    }
    return classes.join(' ');
  }, [mazePath, currentCell]);

  const calculateBorderSize = useCallback(() => {
    const maxDimension = Math.max(mazeHeight, mazeWidth);
    const minScreenDimension = Math.min(windowSize.width, windowSize.height);
    const borderSize = (minScreenDimension * 0.25) / maxDimension;

    if (borderSize < 5) {
      return " maze-b-1";
    } else if (borderSize < 10) {
      return " maze-b-5";
    } else if (borderSize < 15) {
      return " maze-b-10";
    } else if (borderSize < 20) {
      return " maze-b-15";
    } else if (borderSize > 19) {
      return " maze-b-20";
    }
    return borderSize;
  }, [mazeHeight, mazeWidth, windowSize]);

  const getMazeRows = useCallback(() => {
    const cells = [];
    const size = mazeHeight * mazeWidth;
    for (let i = 0; i < size; i++) {
      cells.push(
        <div className={"maze-cell " + getCellStyles(initMaze[i])} key={i}>
          <div className={getPathStyles(i)}></div>
        </div>
      );
    }

    // Apply layout
    if (mazeRef.current) {
      mazeRef.current.style.gridTemplateColumns = 'repeat('+mazeWidth+', 1fr)';
      mazeRef.current.style.aspectRatio = mazeWidth+'/'+mazeHeight;
    }
    
    return cells;
  }, [mazeHeight, mazeWidth, initMaze, getPathStyles]);

  return (
    <div ref={mazeRef} className={"maze" + calculateBorderSize()}>
      {getMazeRows()}
    </div>
  )
}
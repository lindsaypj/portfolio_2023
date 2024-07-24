import React, { useEffect, useState } from "react";

import { clamp } from "../../scripts/utils";
// import { generateMazeRequest } from "../../scripts/requests";

import '../../styles/MazeControls.css';
import ArrowLeftIcon from "../../resources/icons/ArrowLeftIcon";
import ArrowDownIcon from "../../resources/icons/ArrowDownIcon";
import ArrowRightIcon from "../../resources/icons/ArrowRightIcon";
import ArrowUpIcon from "../../resources/icons/ArrowUpIcon";


const MIN_MAZE_DIMENSION = 4;
const MAX_MAZE_DIMENSION = 100;
const DIRECTION_MAP = ['north', 'east', 'south', 'west'];
const INIT_BUTTON = {disabled: true, onClick: () => {}};
const INIT_BUTTON_STATES = {'north': INIT_BUTTON, 'east': INIT_BUTTON, 'south': INIT_BUTTON, 'west': INIT_BUTTON};

export default function MazeControls({ defaultSize, handlePathTraversal, traversalOptions, generateCallback, solveCallback }) {
  const [mazeHeightInput, setMazeHeightInput] = useState(defaultSize);
  const [mazeWidthInput, setMazeWidthInput] = useState(defaultSize);
  const [buttonStates, setButtonStates] = useState(INIT_BUTTON_STATES);

  ////   STATE MANAGMENT   ////

  const handleWidthBlur = (event) => {
    const nextSize = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, event.target.value);
    setMazeWidthInput(nextSize);
  }
  const handleHeightBlur = (event) => {
    const nextSize = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, event.target.value);
    setMazeHeightInput(nextSize);
  }

  // Update 
  useEffect(() => {
    const nextButtonStates = {...INIT_BUTTON_STATES};
    for (let i = 0; i < traversalOptions.length; i++) {
      const nextButton = {...INIT_BUTTON};
      nextButton.disabled = false;
      nextButton.onClick = () => {
        handlePathTraversal(traversalOptions[i]);
      }
      nextButtonStates[DIRECTION_MAP[traversalOptions[i]]] = nextButton;
    }
    setButtonStates(nextButtonStates);
  }, [traversalOptions, handlePathTraversal]);

  const generateMaze = () => {
    const requestHeight = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeHeightInput);
    setMazeHeightInput(requestHeight);
    const requestWidth = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeWidthInput);
    setMazeWidthInput(requestWidth);
    
    generateCallback(requestWidth, requestHeight);
  }


  ////   RENDERING   ////

  return (
    <form className="maze-controls" onSubmit={(event) => {event.preventDefault()}}>
      <div className="maze-size-controls">
        <div className="dimensions">

          <div className="maze-input-group">
            <label htmlFor="input-maze-width">Width: </label>
            <input
              id="input-maze-width"
              className="form-control"
              type="number"
              value={mazeWidthInput}
              min={MIN_MAZE_DIMENSION}
              max={MAX_MAZE_DIMENSION}
              onChange={(event) => setMazeWidthInput(event.target.value)}
              onBlur={handleWidthBlur}
            />
          </div>

          <div className="icon-wrapper">
            <span className="x-icon">X</span>
          </div>
          
          <div className="maze-input-group">
            <label htmlFor="input-maze-height">Height: </label>
            <input
              id="input-maze-height"
              className="form-control"
              type="number"
              value={mazeHeightInput}
              min={MIN_MAZE_DIMENSION}
              max={MAX_MAZE_DIMENSION}
              onChange={(event) => setMazeHeightInput(event.target.value)}
              onBlur={handleHeightBlur}
            />
          </div>
        </div>
        <div className="button-group">
          <button
            className="btn btn-light me-2"
            onClick={generateMaze}
          >Generate</button>
          <button
            className="btn btn-light"
            onClick={solveCallback}
          >Solve</button>
        </div>
      </div>
      <div className="maze-traversal-controls">
        <div className="wrapper">
          <button className="btn btn-light m-0" {...buttonStates.north}><ArrowUpIcon /></button>
          <div>
            <button className="btn btn-light my-2" {...buttonStates.west}><ArrowLeftIcon /></button>
            <button className="btn btn-light m-2" {...buttonStates.south}><ArrowDownIcon /></button>
            <button className="btn btn-light my-2" {...buttonStates.east}><ArrowRightIcon /></button>
          </div>
        </div>
      </div>
    </form>
  )
}
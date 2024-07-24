import React, { useCallback, useReducer, useState } from 'react';
import Maze from './Maze';
import MazeControls from './MazeControls';
import { Col, Container, Row } from 'react-bootstrap';

import DEFAULT_MAZE from '../../resources/mocks/testMaze10x10.json';

import '../../styles/MazeGame.css';
import { getNeighborCell } from '../../scripts/mazeUtils';
import { MazeGameController } from '../../objects/MazeGameController';

const DEFAULT_MAZE_DIMENSION = 10;
const INIT_PATH = { path: [0], lastCell: null, currentCell: 0, traversalOptions: DEFAULT_MAZE[0] };
const DEFAULT_CONTROLLER = new MazeGameController(DEFAULT_MAZE_DIMENSION, DEFAULT_MAZE_DIMENSION, DEFAULT_MAZE);

export default function MazeGame() {
  const [controller, setController] = useState(DEFAULT_CONTROLLER);
  const [initMaze, setInitMaze] = useState(DEFAULT_MAZE);
  const [mazeHeight, setMazeHeight] = useState(DEFAULT_MAZE_DIMENSION);
  const [mazeWidth, setMazeWidth] = useState(DEFAULT_MAZE_DIMENSION);
  const [mazePath, updateMazePath] = useReducer(pathReducer, INIT_PATH);
  const [solved, setSolved] = useState(false);


  function pathReducer(state, action) {
    if (action.move !== undefined && action.current === state.currentCell) {
      if (!state.traversalOptions.includes(action.move)) {  
        throw Error('Illegal move request');
      }

      const nextCellIndex = getNeighborCell(state.currentCell, action.move, mazeWidth, initMaze.length);
      const nextTraversalOptions = [...initMaze[nextCellIndex]];
      const nextPath = [...state.path];
      let lastCell;

      if (nextCellIndex === state.lastCell) { // Backtrace
        nextPath.pop();
        lastCell = nextPath.length === 1 ? null : nextPath[nextPath.length - 2];
      }
      else { // Step Forward
        nextPath.push(nextCellIndex);
        lastCell = state.currentCell;
      }

      // Check if solved
      if (nextCellIndex === initMaze.length - 1) {
        setSolved(true);
      }

      return {
        path: nextPath,
        currentCell: nextCellIndex,
        lastCell: lastCell,
        traversalOptions: nextTraversalOptions
      }
    }
    if (action.init) {
      const nextTraversalOptions = [...initMaze[0]];
      return {
        ...INIT_PATH,
        traversalOptions: nextTraversalOptions
      };
    }
  }
    
  const handlePathTraversal = useCallback((moveDirection) => {
    updateMazePath({'move': moveDirection, 'current': mazePath.currentCell});
  }, [mazePath]);

  const handleGeneration = useCallback((nextwidth, nextHeight) => {
    const newController = new MazeGameController(nextwidth, nextHeight);
    setController(newController);

    const nextMaze = newController.getMaze();
    setInitMaze(nextMaze);

    setMazeWidth(nextwidth);
    setMazeHeight(nextHeight);
    updateMazePath({'init': true});
    setSolved(false);
  }, []);

  return (
    <Container fluid className='min-vh-100'>
      <Row>
        <Col className='text-center my-4'>
          <div className='maze-container'>
            <Maze
              mazeHeight={mazeHeight}
              mazeWidth={mazeWidth}
              initMaze={initMaze}
              mazePath={mazePath.path}
              currentCell={mazePath.currentCell}
              traversalOptions={mazePath.traversalOptions}
              solved={solved}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <MazeControls
            defaultSize={DEFAULT_MAZE_DIMENSION}
            handlePathTraversal={handlePathTraversal}
            traversalOptions={mazePath.traversalOptions}
            generateCallback={handleGeneration}
          />
        </Col>
      </Row>
    </Container>
  )
}
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SudokuBoard from "./SudokuBoard";
import TestConfigurator from "./TestConfigurator";

import { Sudoku } from "../../objects/SudokuGame";


export default function SudokuGame() {

  ////    INITIALIZATION    ////

  const sudokuGame = new Sudoku()

  const [board, setBoard] = useState(sudokuGame.getBoard());
  const [initialBoard, setInitialBoard] = useState(sudokuGame.getInitBoard());
  const [size, setSize] = useState(sudokuGame.getSize());
  const [hideNums, setHideNums] = useState(sudokuGame.getHideNums());
  const [showConflicts, setShowConflicts] = useState(sudokuGame.getShowConflicts());
  const [conflicts, setConflicts] = useState(sudokuGame.getConflicts());


  ////    STATE MANAGMENT    ////

  const handleBoardUpdate = (boardSize, nextBoard, index) => {
    // Update init and session data
    sudokuGame.updateBoardBySize({boardSize, nextBoard, index});

    setBoard(nextBoard);
    setConflicts(sudokuGame.getConflicts());
  }

  const handleBoardSizeChange = (nextSize) => {
    sudokuGame.changeSize(nextSize);
    setSize(nextSize);
    setBoard(sudokuGame.getBoard());
    setInitialBoard(sudokuGame.getInitBoard());
    setConflicts(sudokuGame.getConflicts());
  }

  const handleHideNumsChange = (nextHideNums) => {
    sudokuGame.showHideNums(nextHideNums);
    setHideNums(nextHideNums);
  }

  const handleShowConflictsChange = (shouldShowConflicts) => {
    sudokuGame.showHideConflicts(shouldShowConflicts);
    setShowConflicts(shouldShowConflicts);
  }


  ////    RENDERING    ////

  return (
    <Container fluid className='min-vh-100 p-0 m-0'>
      <Row>
        <Col className='text-center mt-4 p-0'>
          <SudokuBoard
            size={size}
            initialBoard={initialBoard}
            saveState={board}
            handleBoardUpdate={handleBoardUpdate}
            boardIndex={10}
            hideNums={hideNums}
            conflicts={conflicts}
          />
        </Col>
      </Row>
      <Row>
        <Col className='text-center p-0'>
          <TestConfigurator
            boardSize={size}
            setBoardSize={handleBoardSizeChange}
            hideNums={hideNums}
            setHideNums={handleHideNumsChange}
            showConflicts={showConflicts}
            setShowConflicts={handleShowConflictsChange}
          />
        </Col>
      </Row>
    </Container>
  )
}
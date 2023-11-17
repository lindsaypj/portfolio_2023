import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SudokuBoard from "../components/SudokuBoard";
import TestConfigurator from "../components/TestConfigurator";

import { SudokuPreferences } from "../objects/SudokuPreferences";


export default function SudokuGame() {
  ////    INITIALIZATION    ////

  const savedSudokuPreferences = new SudokuPreferences();
  const [sudokuPreferences, setSudokuPreferences] = useState(savedSudokuPreferences);

  const savedSize = savedSudokuPreferences.size;
  const savedInitialBoard = savedSudokuPreferences.getSavedInitialBoard();
  const savedBoard = savedSudokuPreferences.getSavedBoard();
  const savedHideNums = savedSudokuPreferences.hideNums;

  const [board, setBoard] = useState(savedBoard);
  const [initialBoard, setInitialBoard] = useState(savedInitialBoard);
  const [size, setSize] = useState(savedSize);
  const [hideNums, setHideNums] = useState(savedHideNums);


  ////    STATE MANAGMENT    ////

  const updateBoardBySize = ({ boardSize, nextBoard }) => {
    const updatedPreferences = sudokuPreferences;
    switch(boardSize) {
      case 4:
        updatedPreferences.board4 = nextBoard;
        break;
      case 9:
        updatedPreferences.board9 = nextBoard;
        break;
      case 16:
        updatedPreferences.board16 = nextBoard;
        break;
    }
    setSudokuPreferences(updatedPreferences);
    updatedPreferences.savePreferences();
  }

  const handleBoardUpdate = (boardSize, nextBoard) => {
    // Update Local State
    setBoard(nextBoard);

    // Update preferences (local and session)
    updateBoardBySize({boardSize, nextBoard});
  }

  const handleBoardSizeChange = (nextSize) => {
    const updatedPreferences = sudokuPreferences;
    updatedPreferences.size = nextSize;
    setSize(nextSize);
    setBoard(sudokuPreferences.getSavedBoard(nextSize));
    setInitialBoard(sudokuPreferences.getSavedInitialBoard(nextSize));
    
    setSudokuPreferences(updatedPreferences);
    updatedPreferences.savePreferences();
  }

  const handleHideNumsChange = (nextHideNums) => {
    const updatedPreferences = sudokuPreferences;
    updatedPreferences.hideNums = nextHideNums;
    setHideNums(nextHideNums);
    
    setSudokuPreferences(updatedPreferences);
    updatedPreferences.savePreferences();
  }


  ////    RENDERING    ////

  return (
    <Container fluid className='min-vh-100 p-0 m-0'>
      <Row>
        <Col className='text-center mt-4'>
          <SudokuBoard
            size={size}
            initialBoard={initialBoard}
            saveState={board}
            handleBoardUpdate={handleBoardUpdate}
            boardIndex={10}
            hideNums={hideNums}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TestConfigurator
            numBoards={1}
            boardSize={size}
            setBoardSize={handleBoardSizeChange}
            hideNums={hideNums}
            setHideNums={handleHideNumsChange}
          />
        </Col>
      </Row>
    </Container>
  )
}
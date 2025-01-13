import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SudokuBoard from "../components/SudokuBoard";
import TestConfigurator from "../components/TestConfigurator";

import { Sudoku } from "../objects/SudokuGame";


export default function SudokuGame() {

  ////    INITIALIZATION    ////

  const sudokuGame = new Sudoku()

  const [board, setBoard] = useState(sudokuGame.getBoard());
  const [initialBoard, setInitialBoard] = useState(sudokuGame.getInitBoard());
  const [size, setSize] = useState(sudokuGame.getSize());
  const [hideNums, setHideNums] = useState(sudokuGame.getHideNums());


  ////    STATE MANAGMENT    ////

  const handleBoardUpdate = (boardSize, nextBoard) => {
    setBoard(nextBoard);

    // Update init and session data
    sudokuGame.updateBoardBySize({boardSize, nextBoard});
  }

  const handleBoardSizeChange = (nextSize) => {
    sudokuGame.changeSize(nextSize);
    setSize(nextSize);
    setBoard(sudokuGame.getBoard());
    setInitialBoard(sudokuGame.getInitBoard());
  }

  const handleHideNumsChange = (nextHideNums) => {
    sudokuGame.showHideNums(nextHideNums)
    setHideNums(nextHideNums);
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
          />
        </Col>
      </Row>
      <Row>
        <Col className='text-center p-0'>
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
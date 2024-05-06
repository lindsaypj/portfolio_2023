import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SudokuBoard from "../components/SudokuBoard";
import TestConfigurator from "../components/TestConfigurator";

import { SudokuGameData } from "../objects/SudokuGameData";


export default function SudokuGame() {

  ////    INITIALIZATION    ////

  const savedSudokuGameData = new SudokuGameData();
  const [sudokuGameData, setSudokuGameData] = useState(savedSudokuGameData);

  const savedSize = savedSudokuGameData.size;
  const savedInitialBoard = savedSudokuGameData.getSavedInitialBoard();
  const savedBoard = savedSudokuGameData.getSavedBoard();
  const savedHideNums = savedSudokuGameData.hideNums;

  const [board, setBoard] = useState(savedBoard);
  const [initialBoard, setInitialBoard] = useState(savedInitialBoard);
  const [size, setSize] = useState(savedSize);
  const [hideNums, setHideNums] = useState(savedHideNums);


  ////    STATE MANAGMENT    ////

  const updateBoardBySize = ({ boardSize, nextBoard }) => {
    const updatedGameData = sudokuGameData;
    switch(boardSize) {
      case 4:
        updatedGameData.board4 = nextBoard;
        break;
      case 9:
        updatedGameData.board9 = nextBoard;
        break;
      case 16:
        updatedGameData.board16 = nextBoard;
        break;
      default:
        console.log('Size ['+ boardSize +'] not recognized');
    }
    setSudokuGameData(updatedGameData);
    updatedGameData.saveGameData();
  }

  const handleBoardUpdate = (boardSize, nextBoard) => {
    // Update Local State
    setBoard(nextBoard);

    // Update GameData (local and session)
    updateBoardBySize({boardSize, nextBoard});
  }

  const handleBoardSizeChange = (nextSize) => {
    const updatedGameData = sudokuGameData;
    updatedGameData.size = nextSize;
    setSize(nextSize);
    setBoard(updatedGameData.getSavedBoard(nextSize));
    setInitialBoard(updatedGameData.getSavedInitialBoard(nextSize));
    
    setSudokuGameData(updatedGameData);
    updatedGameData.saveGameData();
  }

  const handleHideNumsChange = (nextHideNums) => {
    const updatedGameData = sudokuGameData;
    updatedGameData.hideNums = nextHideNums;
    setHideNums(nextHideNums);
    
    setSudokuGameData(updatedGameData);
    updatedGameData.saveGameData();
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
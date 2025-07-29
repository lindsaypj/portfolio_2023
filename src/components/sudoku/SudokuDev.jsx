import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypingText from "../TypingText";
import SudokuBoard from "./SudokuBoard";
import TestConfigurator from "./TestConfigurator";

import { getSessionValue, saveSessionValue } from "../../scripts/sessionInterface";
import INIT_DEV_DATA from "../../resources/mocks/sudokuDev.json";
import { getBoardFromData, getConflicts, setBoardWithData } from "../../scripts/sudokuUtils";


const SUDOKU_DEV_DATA_KEY = 'SUDOKU_DEV_DATA_KEY';

export default function SudokuDev() {

  ////   INITIALIZATION   ////

  const sudokuData = getSessionValue(SUDOKU_DEV_DATA_KEY) || INIT_DEV_DATA;
  const currentBoard = getBoardFromData(sudokuData, sudokuData.size);

  const [size, setSize] = useState(sudokuData.size);
  const [initBoard, setInitBoard] = useState(sudokuData.initBoard);
  const [board, setBoard] = useState(currentBoard);
  const [hideNums, setHideNums] = useState(sudokuData.hideNums);
  const [conflicts, setConlicts] = useState(sudokuData.conflicts);
  const [showConflicts, setShowConflicts] = useState(sudokuData.showConflicts);


  ////   STATE MANAGMENT   ////

  const handleBoardUpdate = (size, updatedBoard) => {
    setBoardWithData(sudokuData, updatedBoard);
    const nextConflicts = getConflicts(updatedBoard, size);
    sudokuData.conflicts = nextConflicts;
    setBoard(updatedBoard);
    setConlicts(nextConflicts);
    saveSessionValue(SUDOKU_DEV_DATA_KEY, sudokuData);
  }

  const handleBoardSizeChange = (nextSize) => {
    sudokuData.size = nextSize;
    const nextBoard = getBoardFromData(sudokuData, nextSize);
    sudokuData.board = nextBoard;
    sudokuData.initBoard = nextBoard;
    const nextConflicts = getConflicts(nextBoard, nextSize);
    sudokuData.conflicts = nextConflicts;
    setSize(nextSize);
    setBoard(nextBoard);
    setInitBoard(nextBoard);
    setConlicts(nextConflicts);
    saveSessionValue(SUDOKU_DEV_DATA_KEY, sudokuData);
  }

  const handleHideNumsChange = (nextHideNums) => {
    sudokuData.hideNums = nextHideNums;
    setHideNums(nextHideNums);
    saveSessionValue(SUDOKU_DEV_DATA_KEY, sudokuData);
  }

  const handleShowConflictsChange = (shouldShowConflicts) => {
    sudokuData.showConflicts = shouldShowConflicts;
    setShowConflicts(shouldShowConflicts);
    saveSessionValue(SUDOKU_DEV_DATA_KEY, sudokuData);
  }


  ////   RENDERING   ////

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='portfolio-header'>
            <TypingText text='/Dev/Sudoku' />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5" lg={6} xl={7}>
          <SudokuBoard
            size={size}
            initialBoard={initBoard}
            saveState={board}
            handleBoardUpdate={handleBoardUpdate}
            boardIndex={0}
            hideNums={hideNums}
            conflicts={conflicts}
          />
        </Col>
        <Col className="mt-5" lg={6} xl={5}>
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
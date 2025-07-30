import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypingText from "../TypingText";
import SudokuBoard from "./SudokuBoard";
import TestConfigurator from "./TestConfigurator";

import { getSessionValue, saveSessionValue } from "../../scripts/sessionInterface";
import INIT_DEV_DATA from "../../resources/mocks/sudokuDev.json";
import { getBoardFromData, getConflicts, getInitBoard, getPossibleNums, setBoardWithData } from "../../scripts/sudokuUtils";


const SUDOKU_DEV_DATA_KEY = 'SUDOKU_DEV_DATA_KEY';

export default function SudokuDev() {

  ////   INITIALIZATION   ////

  const sudokuData = getSessionValue(SUDOKU_DEV_DATA_KEY) || INIT_DEV_DATA;
  const currentBoard = getBoardFromData(sudokuData, sudokuData.size);

  const [size, setSize] = useState(sudokuData.size);
  // const [initBoard, setInitBoard] = useState(sudokuData.initBoard);
  const [board, setBoard] = useState(currentBoard);
  const [hideNums, setHideNums] = useState(sudokuData.hideNums);
  const [conflicts, setConlicts] = useState(sudokuData.conflicts);
  const [showConflicts, setShowConflicts] = useState(sudokuData.showConflicts);
  const [possibleNums, setPossibleNums] = useState(sudokuData.possibleNums);
  const [showNotes, setShowNotes] = useState(true);


  ////   STATE MANAGMENT   ////

  const handleBoardUpdate = (size, updatedBoard) => {
    setBoardWithData(sudokuData, updatedBoard);
    const nextConflicts = getConflicts(updatedBoard, size);
    sudokuData.conflicts = nextConflicts;
    const nextPossibleNums = getPossibleNums(updatedBoard, size);
    sudokuData.possibleNums = nextPossibleNums;
    setBoard(updatedBoard);
    setConlicts(nextConflicts);
    setPossibleNums(nextPossibleNums);
    saveSessionValue(SUDOKU_DEV_DATA_KEY, sudokuData);
  }

  const handleBoardSizeChange = (nextSize) => {
    sudokuData.size = nextSize;
    const nextBoard = getBoardFromData(sudokuData, nextSize);
    // sudokuData.initBoard = getInitBoard(nextSize);
    sudokuData.board = nextBoard;
    const nextConflicts = getConflicts(nextBoard, nextSize);
    sudokuData.conflicts = nextConflicts;
    const nextPossibleNums = getPossibleNums(nextBoard, nextSize);
    sudokuData.possibleNums = nextPossibleNums;
    setSize(nextSize);
    setBoard(nextBoard);
    // setInitBoard(nextBoard);
    setConlicts(nextConflicts);
    setPossibleNums(nextPossibleNums);
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

  const getConflictsForRender = useCallback(() => {
    if (showConflicts) {
      return conflicts;
    }
    return [];
  }, [showConflicts, conflicts])

  return (
    <Container fluid className='p-0'>
      <Row>
        <Col>
          <h1 className='portfolio-header padding-margins'>
            <TypingText text='/Dev/Sudoku' />
          </h1>
        </Col>
      </Row>
      <Row className='p-0 m-0 text-center'>
        <Col className='mt-5 p-0' xs={12}>
          <SudokuBoard
            size={size}
            initialBoard={getInitBoard(size)}
            saveState={board}
            handleBoardUpdate={handleBoardUpdate}
            boardIndex={0}
            hideNums={hideNums}
            conflicts={getConflictsForRender()}
            notes={possibleNums}
            showNotes={showNotes}
          />
        </Col>
        <Col className='mt-5 p-0' xs={12}>
          <TestConfigurator
            boardSize={size}
            setBoardSize={handleBoardSizeChange}
            hideNums={hideNums}
            setHideNums={handleHideNumsChange}
            showConflicts={showConflicts}
            setShowConflicts={handleShowConflictsChange}
            showNotes={showNotes}
            setShowNotes={setShowNotes}
           />
        </Col>
      </Row>
    </Container>
  )
}
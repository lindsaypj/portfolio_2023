import { saveSessionValue, getSessionValue } from "../scripts/sessionInterface";

const EXAMPLE_4X4 = [
  1, 2, 0, 4,
  0, 0, 1, 0,
  2, 0, 0, 0,
  4, 3, 0, 0
];
const EXAMPLE_9X9 = [
  3, 0, 0, 8, 0, 1, 0, 0, 2,
  2, 0, 1, 0, 3, 0, 6, 0, 4,
  0, 0, 0, 2, 0, 4, 0, 0, 0,
  8, 0, 9, 0, 0, 0, 1, 0, 6,
  0, 6, 0, 0, 0, 0, 0, 5, 0,
  7, 0, 2, 0, 0, 0, 4, 0, 9,
  0, 0, 0, 5, 0, 9, 0, 0, 0,
  9, 0, 4, 0, 8, 0, 7, 0, 5,
  6, 0, 0, 1, 0, 7, 0, 0, 3
];
const EXAMPLE_16X16 = [
  1,  0,  0,  2,  3,  4,  0,  0, 12,  0,  6,  0,  0,  0,  7,  0,
  0,  0,  8,  0,  0,  0,  7,  0,  0,  3,  0,  0,  9, 10,  6, 11,
  0, 12,  0,  0, 10,  0,  0,  1,  0, 13,  0, 11,  0,  0, 14,  0,
  3,  0,  0, 15,  2,  0,  0, 14,  0,  0,  0,  9,  0,  0, 12,  0,
  13, 0,  0,  0,  8,  0,  0, 10,  0, 12,  2,  0,  1, 15,  0,  0,
  0, 11,  7,  6,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  5, 13,
  0,  0,  0, 10,  0,  5, 15,  0,  0,  4,  0,  8,  0,  0, 11,  0,
  16, 0,  0,  5,  9, 12,  0,  0,  1,  0,  0,  0,  0,  0,  8,  0,
  0,  2,  0,  0,  0,  0,  0, 13,  0,  0, 12,  5,  8,  0,  0,  3,
  0, 13,  0,  0, 15,  0,  3,  0,  0, 14,  8,  0, 16,  0,  0,  0,
  5,  8,  0,  0,  1,  0,  0,  0,  2,  0,  0,  0, 13,  9, 15,  0,
  0,  0, 12,  4,  0,  6, 16,  0, 13,  0,  0,  7,  0,  0,  0,  5,
  0,  3,  0,  0, 12,  0,  0,  0,  6,  0,  0,  4, 11,  0,  0, 16,
  0,  7,  0,  0, 16,  0,  5,  0, 14,  0,  0,  1,  0,  0,  2,  0,
  11, 1, 15,  9,  0,  0, 13,  0,  0,  2,  0,  0,  0, 14,  0,  0,
  0, 14,  0,  0,  0, 11,  0,  2,  0,  0, 13,  3,  5,  0,  0, 12,
];

const SUDOKU_SESSION_KEY = 'SUDOKU_GAME_DATA';

export class SudokuGameData {
  constructor() {
    const savedGameData = getSessionValue(SUDOKU_SESSION_KEY);

    if (savedGameData) {
      this.size = savedGameData.size;
      this.hideNums = savedGameData.hideNums;
      this.showConflicts = savedGameData.showConflicts;
      this.conflicts = savedGameData.conflicts;
      this.boards = savedGameData.boards;
      this.initBoards = savedGameData.initBoards;
      this.solved = savedGameData.solved;
    }
    else {
      this.size = 4;
      this.hideNums = false;
      this.showConflicts = true;
      this.conflicts = [];
      this.boards = {
        4: EXAMPLE_4X4,
        9: EXAMPLE_9X9,
        16: EXAMPLE_16X16
      };
      this.initBoards = {
        4: EXAMPLE_4X4,
        9: EXAMPLE_9X9,
        16: EXAMPLE_16X16
      };
      this.solved = {
        4: false,
        9: false,
        16: false
      };
    }

    this.getSavedBoard = () => {
      try {
        return this.boards[this.size]
      } catch (error) {
        console.log(error);
      }
    };

    this.setBoard = (size, nextBoard) => {
      try {
        this.boards[this.size] = nextBoard;
      } catch (error) {
        console.log(error);
      }
    }
    
    this.getSavedInitialBoard = () => {
      try {
        return this.initBoards[this.size]
      } catch (error) {
        console.log(error);
      }
    };

    this.getSolved = () => {
      try {
        return this.solved[this.size]
      } catch (error) {
        console.log(error);
      }
    }

    this.setSolved = (solved) => {
      try {
        this.solved[this.size] = solved;
      } catch (error) {
        console.log(error);
      }
    }

    this.resetCurrentBoard = () => {
      try {
        this.boards[this.size] = this.initBoards[this.size];
        this.solved[this.size] = false;
        this.conflicts = [];
      } catch (error) {
        console.log(error);
      }
    }

    // Save data to session storage
    this.saveGameData = () => {
      saveSessionValue(SUDOKU_SESSION_KEY, this);
    };
  };
}
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
      this.board4 = savedGameData.board4;
      this.board9 = savedGameData.board9;
      this.board16 = savedGameData.board16;
      this.initBoard4 = savedGameData.initBoard4;
      this.initBoard9 = savedGameData.initBoard9;
      this.initBoard16 = savedGameData.initBoard16;
    }
    else {
      this.size = 4;
      this.hideNums = false;
      this.showConflicts = true;
      this.conflicts = [];
      this.board4 = EXAMPLE_4X4;
      this.board9 = EXAMPLE_9X9;
      this.board16 = EXAMPLE_16X16;
      this.initBoard4 = EXAMPLE_4X4;
      this.initBoard9 = EXAMPLE_9X9;
      this.initBoard16 = EXAMPLE_16X16;
    }

    this.getSavedBoard = () => {
      switch(this.size) {
        case 4:
          return this.board4;
        case 9:
          return this.board9;
        case 16:
          return this.board16;
        default:
          console.log('Size ['+ this.size +'] not recognized');
      }
    };
    
    this.getSavedInitialBoard = () => {
      switch(this.size) {
        case 4:
          return this.initBoard4;
        case 9:
          return this.initBoard9;
        case 16:
          return this.initBoard16;
        default:
          console.log('Size ['+ this.size +'] not recognized');
      }
    };

    // Save data to session storage
    this.saveGameData = () => {
      saveSessionValue(SUDOKU_SESSION_KEY, this);
    };
  };
}
import getCellGroups from "./SudokuInitTools";

export class SudokuGame {
  constructor({ size, board }) {
    // Game data
    this.size = size;
    this.board = board;

    // Cell conflict groups
    const cellGroups = getCellGroups(size);
    this.rows = cellGroups.rows;
    this.cols = cellGroups.cols;
    this.groups = cellGroups.groups;

    this.checkForConflict = (cellIndex) => {
      
    };
  }
}
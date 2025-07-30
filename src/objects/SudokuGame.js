import { getConflicts } from "../scripts/sudokuUtils";
import { SudokuGameData } from "./SudokuGameData";

export class Sudoku {
  constructor() {
    this.gameData = new SudokuGameData();

    this.getSize = () => {
      return this.gameData.size;
    }

    this.getHideNums = () => {
      return this.gameData.hideNums;
    }

    this.getBoard = () => {
      return this.gameData.getSavedBoard()
    }

    this.getInitBoard = () => {
      return this.gameData.getSavedInitialBoard()
    }

    this.getShowConflicts = () => {
      return this.gameData.showConflicts;
    }

    this.getConflicts = () => {
      return this.gameData.conflicts;
    }

    this.isSolved = () => {
      return this.gameData.getSolved() === true;
    }

    this.changeSize = (newSize) => {
      this.gameData.size = newSize;
      this.updateConflicts();
      this.gameData.saveGameData();
    }

    this.showHideNums = (nextHideNums) => {
      this.gameData.hideNums = nextHideNums;
      this.gameData.saveGameData();
    }

    this.showHideConflicts = (shouldShowConflicts) => {
      this.gameData.showConflicts = shouldShowConflicts;
      this.updateConflicts();
      this.gameData.saveGameData();
    }

    this.updateBoardBySize = (boardSize, nextBoard) => {
      this.gameData.setBoard(boardSize, nextBoard)
      this.updateConflicts();
      this.checkWinCondition();
      this.gameData.saveGameData();
    }

    this.updateConflicts = (size = this.getSize(), board = this.getBoard()) => {
      if (!this.gameData.showConflicts) {
        this.gameData.conflicts = [];
        return;
      }
      this.gameData.conflicts = getConflicts(board, size);
    }

    this.checkWinCondition = () => {
      let win = true;
      
      // No conflicts
      const conflicts = this.getConflicts();
      if (conflicts.length > 0) {
        win = false;
      }

      // No empty cells
      const board = this.getBoard();
      win = win && !Object.values(board).some((cell) => {
        return cell === 0;
      });

      this.gameData.setSolved(win);
    }

    this.reset = () => {
      this.gameData.resetCurrentBoard();
      this.gameData.saveGameData();
    }
  }
}
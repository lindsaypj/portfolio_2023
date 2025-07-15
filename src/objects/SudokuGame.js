import { SudokuGameData } from "./SudokuGameData";
import getCellGroups from "./SudokuInitTools";

export class Sudoku {
  constructor() {
    this.gameData = new SudokuGameData();
    this.cellGroups = getCellGroups(this.gameData.size);

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
      this.cellGroups = getCellGroups(newSize);
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

    this.updateBoardBySize = ({ boardSize, nextBoard }) => {
      this.gameData.setBoard(boardSize, nextBoard)
      this.updateConflicts();
      this.checkWinCondition();
      this.gameData.saveGameData();
    }

    this.updateConflicts = () => {
      if (!this.gameData.showConflicts) {
        this.gameData.conflicts = [];
        return;
      }
      this.gameData.conflicts = this.getConflicts();
    }

    this.getConflicts = () => {
      const currentBoard = this.getBoard();
      const conflicts = [];
      Object.values(this.cellGroups).forEach((groupType) => { // Row, Col, Group
        groupType.forEach((group) => { // Row
          const testSet = [];
          const tempConflicts = new Set();
          group.forEach((cellIndex) => { // Cell
            const cellValue = currentBoard[cellIndex];
            if (!cellValue) {
              return;
            }
            if (testSet[cellValue]) {
              testSet[cellValue].push(cellIndex);
              tempConflicts.add(cellValue);
            }
            else {
              testSet[cellValue] = [cellIndex];
            }
          });
          tempConflicts.forEach((conflict) => {
            conflicts.push(...testSet[conflict]);
          });
        });
      });
      return conflicts;
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
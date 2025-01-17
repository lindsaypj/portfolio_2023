import { getHighlightedFromIndex } from "../scripts/sudokuUtils";
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

    this.changeSize = (newSize) => {
      this.gameData.size = newSize;
      this.cellGroups = getCellGroups(newSize);
      this.updateConflicts();
      this.gameData.saveGameData();
    }

    this.showHideNums = (nextHideNums) => {
      this.gameData.hideNums = nextHideNums;
      this.saveGameData();
    }

    this.showHideConflicts = (shouldShowConflicts) => {
      this.gameData.showConflicts = shouldShowConflicts;
      this.updateConflicts();
      this.saveGameData();
    }

    this.updateBoardBySize = ({ boardSize, nextBoard, index }) => {
      switch(boardSize) {
        case 4:
          this.gameData.board4 = nextBoard;
          break;
        case 9:
          this.gameData.board9 = nextBoard;
          break;
        case 16:
          this.gameData.board16 = nextBoard;
          break;
        default:
          console.log('Size ['+ boardSize +'] not recognized');
      }
      this.updateConflicts();
      this.gameData.saveGameData();
    }

    this.updateConflicts = () => {
      if (!this.gameData.showConflicts) {
        this.gameData.conflicts = [];
        return;
      }
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
      this.gameData.conflicts = conflicts;
    }
  }
}
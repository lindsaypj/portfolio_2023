import { getHighlightedFromIndex } from "../scripts/sudokuUtils";
import { SudokuGameData } from "./SudokuGameData";
import getCellGroups from "./SudokuInitTools";

export class Sudoku {
  constructor() {
    this.gameData = new SudokuGameData();

    // Cell conflict groups
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

    this.changeSize = (newSize) => {
      this.gameData.size = newSize;
      this.cellGroups = getCellGroups(newSize);
      this.gameData.saveGameData();
    }

    this.showHideNums = (nextHideNums) => {
      this.gameData.hideNums = nextHideNums;
      this.saveGameData();
    }

    this.updateBoardBySize = ({ boardSize, nextBoard }) => {
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
      this.gameData.saveGameData();
    }

    this.checkForConflict = (cellIndex) => {
      const cellsToCheck = getHighlightedFromIndex(cellIndex);
      let conflict = false;
      cellsToCheck.forEach((cell) => {
        if (this.board[cell] === this.board[cellIndex]) {
          conflict = true;
          return
        }
      })
      return conflict;
    }
  }
}
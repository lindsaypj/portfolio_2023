import { COLS16X16, COLS4X4, COLS9X9, GROUPS16X16, GROUPS4X4, GROUPS9X9, ROWS16X16, ROWS4X4, ROWS9X9 } from "../scripts/sudokuUtils";

const getCellGroups = (size) => {
  switch(size) {
    case 4:
      return {
        rows: ROWS4X4,
        cols: COLS4X4,
        groups: GROUPS4X4,
      }
    case 9:
      return {
        rows: ROWS9X9,
        cols: COLS9X9,
        groups: GROUPS9X9,
      }
    case 16:
      return {
        rows: ROWS16X16,
        cols: COLS16X16,
        groups: GROUPS16X16
      }
    default:
      console.log('ERROR: size '+ size +' not recognized');
  }
}

export default getCellGroups;
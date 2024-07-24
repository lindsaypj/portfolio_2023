const DIRECTIONS = {'NORTH': 0, 'EAST': 1, 'SOUTH': 2, 'WEST': 3};

// Calculates neighboring cell index in given direction
export const getNeighborCell = (currentCell, direction, mazeWidth) => {
  switch(direction) {
    case 0: // North
      return currentCell - mazeWidth;
    case 1: // East
      return currentCell + 1;
    case 2: // South
      return currentCell + mazeWidth;
    case 3: // West
      return currentCell - 1;
    default: 
      return null;
  }
}

export const getNeighborDirection = (currentCell, neighborCell) => {
  const diff = currentCell - neighborCell;
  if (diff < 0) {
    return diff === -1 ? DIRECTIONS.EAST : DIRECTIONS.SOUTH;
  }
  else {
    return diff === 1 ? DIRECTIONS.WEST : DIRECTIONS.NORTH;
  }
}
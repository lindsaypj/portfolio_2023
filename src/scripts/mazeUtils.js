const DIRECTIONS = {'NORTH': 0, 'EAST': 1, 'SOUTH': 2, 'WEST': 3};

// Calculates neighboring cell index in given direction
export const getNeighborCell = (currentCell, direction, mazeWidth, cellCount) => {
  switch(direction) {
    case 0: // NORTH
      const northNeighbor = currentCell - mazeWidth;
      return northNeighbor < 0 ? -1 : northNeighbor;
    case 1: // EAST
      return (currentCell + 1) % mazeWidth === 0 ? -1 : currentCell + 1;
    case 2: // SOUTH
      const southNeighbor = currentCell + mazeWidth;
      return southNeighbor >= cellCount ? -1 : southNeighbor;
    case 3: // WEST
      return currentCell % mazeWidth === 0 ? -1 : currentCell - 1;
    default:
        return -1;
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
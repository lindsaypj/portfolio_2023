import { getNeighborCell } from "../scripts/mazeUtils"
import { randomInt } from "../scripts/utils"
import { DisjointSets } from "./DisjointSets"
import { MazeGraph } from "./MazeGraph"

export class MazeGameController {
  constructor(width, height, mazeData = null) {
    this.width = width
    this.height = height
    this.cellCount = width * height
    this.sets = new DisjointSets(this.cellCount)
    this.graph = new MazeGraph(this.cellCount)

    if (mazeData === null) {
      this.generate()
    }
    else {
      this.loadMazeData(mazeData)
    }
  }

  // Method to get the current maze
  getMaze() {
    return this.graph.cellMap()
  }
  
  // Method to solve the maze, returning a path from cell '0' to cell 'cellCount'
  solveMaze() {
    return this.graph.depthFirstSearch()
  }
  
  // Method to validate a potential maze state
  validateMazeParams(width, height, mazeData = null) {
    if (width < 4 || width > 100) {
      return "Invalid maze width. 4 <= WIDTH <= 100"
    }
    if (height < 4 || height > 100) {
      return "Invalid maze height. 4 <= HEIGHT <= 100"
    }
    if (mazeData !== null && mazeData.length !== width * height) {
      return "Size mismath. Maze must be width * height."
    }
  }

  // Method to generate the maze
  generate() {
    const generatedCells = Array.from({length: this.cellCount}, (v, i) => i)

    // Loop over cells until minimum spanning tree is reached
    while(this.graph.getEdgeCount() < this.cellCount - 1) {
      // Randomly select from generated cells using Fisher-Yates algorithm
      for (let i = this.cellCount - 1; i > 0; i--) {
        const nextCellIndex = randomInt(i)
        const nextCell = generatedCells[nextCellIndex]
        this.swap(nextCellIndex, i, generatedCells)

        let neighbor = null
        const neighbors = this.randomNeighbors()
        // Loop over neighboring cells until cell is merged or all neighbors exhausted
        for (let counter = 0; counter < 4; counter++) {
          neighbor = getNeighborCell(nextCell, neighbors[counter], this.width, this.cellCount)
          if (neighbor !== -1 && !this.sets.sameSet(nextCell, neighbor)) {
            this.sets.union(nextCell, neighbor)
            this.graph.addEdge(nextCell, neighbor)
            break
          }
        }
        // Break early if requirements are met
        if (this.graph.getEdgeCount() === this.cellCount - 1) {
          break
        }
      }
    }
  }

  // Method to populate a the MazeGraph with an existing maze to be solved
  loadMazeData(mazeData) {
    for (const [cell, doors] of Object.entries(mazeData)) {
      for (let door = 0; door < doors.length; door++) {
        const adjacentCell = getNeighborCell(cell, door, this.width, this.cellCount)
        this.graph.addEdge(cell, adjacentCell)
      }
    }
  }

  swap(firstIndex, secondIndex, array) {
    const firstValue = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = firstValue
  }

  randomNeighbors() {
    const neighbors = [0,1,2,3]
    for (let i = 3; i > 0; i--) {
      this.swap(i, randomInt(i), neighbors)
    }
    return neighbors
  }
}
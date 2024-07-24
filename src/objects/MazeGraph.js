import { getNeighborDirection } from "../scripts/mazeUtils"

export class MazeGraph {
  constructor(vertexCount) {
    this.edgeCount = 0
    this.adjacencyLists = new Map()
    for (let i = 0; i < vertexCount; i++) {
      this.adjacencyLists.set(i, null)
    }
  }

  getEdgeCount() {
    return this.edgeCount
  }
  
  containsVertex(search) {
    return this.adjacencyLists.has(search)
  }
  
  // Method to add an edge between two cells in the graph, indicating a path from one to the other
  addEdge(first, second) {
    if (this.containsEdge(first, second)) {
      return
    }
    this.addDirectedEdge(first, second)
    this.addDirectedEdge(second, first)
    this.edgeCount += 1
  }

  addDirectedEdge(first, second) {
    const oldHead = this.adjacencyLists.get(first)
    if (oldHead === null) {
      this.adjacencyLists.set(first, new MazeNode(second))
    }
    else {
      this.adjacencyLists.set(first, new MazeNode(second, oldHead))
    }
  }

  containsEdge(first, second) {
    if (this.containsVertex(first) && this.containsVertex(second)) {
      let current = this.adjacencyLists.get(first)
      while(current !== null) {
        if (current.vertex === second) {
          return true
        }
        current = current.next
      }
    }
    return false
  }

  // Method to create an exportable list of cells and their traversable directions
  cellMap() {
    const cells = {}
    this.adjacencyLists.forEach((node, key) => {
      let currentNode = node
      const newCell = new MazeCell()
      while (currentNode !== null) {
        newCell.setDoor(getNeighborDirection(key, currentNode.vertex))
        currentNode = currentNode.next
      }
      cells[key] = newCell.getPaths()
    });
    return cells
  }

  depthFirstSearch() {
    const traversal = []
    const visited = new Set()
    let currentCell = 0
    const targetCell = this.adjacencyLists.size - 1
  
    // Repeats for each Vertex in traversal
    while(currentCell !== targetCell) {
      // If this is the first visit to the cell, add to visited set
      if (!visited.has(currentCell)) {
        visited.add(currentCell)
        traversal.push(currentCell)
      }

      // Traverse neighbors
      let neighborList = this.adjacencyLists.get(currentCell)
      while (neighborList !== null) {
        // Find first non-visited neighbor
        if (!visited.has(neighborList.vertex)) {
          currentCell = neighborList.vertex
          break
        }
        neighborList = neighborList.next
      }

      // Check if neighbor was not found (DEAD END FOUND)
      if (neighborList === null) {
        // Step back in traversal
        traversal.pop()
        // Escape if all paths exhausted
        if (traversal.length === 0) {
          return []
        }
        currentCell = traversal[traversal.length - 1]
      }
    }
    traversal.push(currentCell)
    return traversal
  }
}

// Subclass of MazeGraph used to identify nodes in the graph
class MazeNode {
  constructor(otherVertex, nextNode = null) {
    this.vertex = otherVertex
    this.next = nextNode
  }
}

// Used to aid in cell rendering
export class MazeCell {
  constructor() {
    this.doors = [true, true, true, true]
  }

  setDoor(door) {
    this.doors[door] = false
  }

  getDoors() {
    return this.doors
  }

  // Enum to easily identify a wall based on direction
  Doors = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
  }

  getPaths() {
    const paths = []
    for (let wall = 0; wall < 4; wall++) {
      if (!this.doors[wall]) {
        paths.push(wall)
      }
    }
    return paths
  }

  toString() {
    const paths = this.getPaths()
    return String(paths)
  }
}

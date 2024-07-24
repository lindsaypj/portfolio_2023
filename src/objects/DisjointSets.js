export class DisjointSets {
  constructor(numSets) {
    this.sets = Array(numSets).fill(-1)
  }

  find(element) {
    if (element === undefined) return
    if (this.sets[element] < 0) {
      return element
    }
    const root = this.find(this.sets[element])
    this.sets[element] = root
    return this.sets[element]
  }
  
  union(first, second) {
    const firstRoot = this.find(first)
    const secondRoot = this.find(second)
    if (firstRoot !== secondRoot) {
      if (this.sets[firstRoot] < this.sets[secondRoot]) {
        this.sets[secondRoot] = firstRoot
      }
      else if (this.sets[secondRoot] < this.sets[firstRoot]) {
        this.sets[firstRoot] = secondRoot
      }
      else if (this.sets[firstRoot] === this.sets[secondRoot]) {
        this.sets[secondRoot] = firstRoot
        this.sets[firstRoot] -= 1
      }
      return true
    }
    return false
  }

  sameSet(first, second) {
    return this.find(first) === this.find(second)
  }
}
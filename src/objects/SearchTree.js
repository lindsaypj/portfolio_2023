class SearchTree {
  constructor(searchTerms) {
    this.root = new Node();
    this.maxTermLength = 0;
    Object.keys(searchTerms).forEach((term) => {
      this.addSearchTerm(term.toLowerCase());
    });
  }

  getMaxTermLength() {
    return this.maxTermLength;
  }

  addSearchTerm(term) {
    this.addChars(this.root, term, term);
    this.maxTermLength = Math.max(this.maxTermLength, term.length);

    const subTerms = term.split(' ').slice(1).forEach((subTerm) => {
      this.addChars(this.root, subTerm, term);
    });
  }
  addChars(currentNode, partialTerm, searchTerm) {
    const nextChar = partialTerm.charAt(0);

    if (partialTerm.length === 1) {
      if (currentNode.hasChild(nextChar)) {
        const child = currentNode.getChild(nextChar);
        if (child !== null) {
          child.addSearchTerm(searchTerm);
        }
      }
      else {
        currentNode.addChild(new Node(nextChar, true, searchTerm));
      }
      return currentNode;
    }

    if (currentNode.hasChild(nextChar)) {
      this.addChars(currentNode.getChild(nextChar), partialTerm.slice(1), searchTerm);
    }
    else {
      const newNode = this.addChars(new Node(nextChar), partialTerm.slice(1), searchTerm);
      currentNode.addChild(newNode);
    }
    return currentNode;
  }

  getTerms(possibleTerm) {
    if (possibleTerm === "" || !possibleTerm) {
      return new Set();
    }
    const matches = this.getMatchesSet(this.root, possibleTerm.toLowerCase(), "");
    return matches;
  }
  getMatchesSet(currentNode, possibleTerm, sequence) {
    // Traverse tree using possible search term
    if (possibleTerm !== "") {
      const childNode = currentNode.getChild(possibleTerm.charAt(0));
      if (childNode) {
        return this.getMatchesSet(childNode, possibleTerm.slice(1), sequence + currentNode.char);
      }
      return new Set();
    }

    // Save search term if found
    let matches = new Set();
    if (currentNode.isTermEnd) {
      currentNode.getSearchTerms().forEach((searchTerm) => {
        matches.add(searchTerm);
      });
    }

    // Check children for partial matches NOTE: Set.union() is not fully supported
    if (!currentNode.isLeaf) {
      const children = Object.keys(currentNode.children);
      children.forEach((childKey) => {
        const nextMatches = this.getMatchesSet(currentNode.getChild(childKey), possibleTerm, sequence + currentNode.char);
        nextMatches.forEach((searchTerm) => {
          matches.add(searchTerm);
        });
      });
    }
    return matches;
  }
}

class Node {
  constructor(char = "", isTermEnd = false, searchTerm = '') {
    this.char = char;
    this.children = {};
    this.isTermEnd = isTermEnd;
    this.terms = [];
    this.isLeaf = true;

    if (isTermEnd) {
      this.terms.push(searchTerm);
    }
  }

  getChild(char) {
    return this.children[char];
  }

  addChild(childNode) {
    this.children[childNode.char] = childNode;
    this.isLeaf = false;
  }

  addSearchTerm(term) {
    this.terms.push(term);
    this.isTermEnd = true;
  }

  getSearchTerms() {
    return this.terms;
  }

  hasChild(char) {
    return !!this.children[char];
  }
}

export default SearchTree;
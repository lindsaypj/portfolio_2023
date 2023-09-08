class RouteTree {
  constructor(routes = []) {
    this.root = new Node();
    routes.forEach((route) => {
      this.addRoute(route);
    });
  }

  addRoute(route) {
    this.addChars(this.root, route);
  }
  addChars(currentNode, route) {
    const nextChar = route.charAt(0);

    if (route.length === 1) {
      if (currentNode.hasChild(nextChar)) {
        const child = currentNode.getChild(nextChar);
        if (child !== null) {
          child.setRouteEnd();
        }
      }
      else {
        currentNode.addChild(new Node(nextChar, true));
      }
      return currentNode;
    }

    if (currentNode.hasChild(nextChar)) {
      this.addChars(currentNode.getChild(nextChar), route.substring(1));
    }
    else {
      const newNode = this.addChars(new Node(nextChar), route.substring(1));
      currentNode.addChild(newNode);
    }
    return currentNode;
  }

  getRoutes(possibleRoute) {
    if (possibleRoute === "" || !possibleRoute) {
      return [];
    }
    const matches = this.getMatches(this.root, possibleRoute, "");
    return matches;
  }
  getMatches(currentNode, possibleRoute, sequence) {
    // Traverse tree using possible route
    if (possibleRoute !== "") {
      const childNode = currentNode.getChild(possibleRoute.charAt(0));
      if (childNode) {
        return this.getMatches(childNode, possibleRoute.substring(1), sequence + currentNode.char);
      }
      return [];
    }

    // Save route if found
    let matches = [];
    if (currentNode.isRouteEnd) {
      matches.push(sequence + currentNode.char);
    }

    // Check children for partial matches
    if (!currentNode.isLeaf) {
      const children = Object.keys(currentNode.children);
      children.forEach((childKey) => {
        matches = matches.concat(this.getMatches(currentNode.getChild(childKey), possibleRoute, sequence + currentNode.char));
      });
    }
    return matches;
  }
}

class Node {
  constructor(char = "", isRouteEnd = false) {
    this.char = char;
    this.children = {};
    this.isRouteEnd = isRouteEnd;
    this.isLeaf = true;
  }

  getChild(char) {
    return this.children[char];
  }

  addChild(childNode) {
    this.children[childNode.char] = childNode;
    this.isLeaf = false;
  }

  hasChild(char) {
    return !!this.children[char];
  }

  setRouteEnd() {
    this.isRouteEnd = true;
  }
}

export default RouteTree;
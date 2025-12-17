import routes from '../resources/text/routes';
import { HIDDEN_ROUTES } from '../resources/text/routes';

class RouteTree {
  constructor(initialRoutes = routes) {
    this.root = new Node();
    this.maxRouteLength = 0;
    initialRoutes.forEach((route) => {
      this.addRoute(route);
    });
    HIDDEN_ROUTES.forEach((route) => {
      this.addRoute(route, true);
    });
  }

  getMaxRouteLength() {
    return this.maxRouteLength;
  }

  addRoute(route, hidden = false) {
    this.addChars(this.root, route.route, route.desc, hidden);
    this.maxRouteLength = Math.max(this.maxRouteLength, route.route.length);
  }
  addChars(currentNode, route, routeDesc, isHidden) {
    const nextChar = route.charAt(0);

    if (route.length === 1) {
      if (currentNode.hasChild(nextChar)) {
        const child = currentNode.getChild(nextChar);
        if (child !== null) {
          child.setRouteEnd(routeDesc, isHidden);
        }
      }
      else {
        currentNode.addChild(new Node(nextChar, true, routeDesc, isHidden));
      }
      return currentNode;
    }

    if (currentNode.hasChild(nextChar)) {
      this.addChars(currentNode.getChild(nextChar), route.slice(1), routeDesc, isHidden);
    }
    else {
      const newNode = this.addChars(new Node(nextChar), route.slice(1), routeDesc, isHidden);
      currentNode.addChild(newNode);
    }
    return currentNode;
  }

  getRoutes(possibleRoute) {
    if (possibleRoute === "" || !possibleRoute) {
      return [[], []]; // [[possibleRoutes], [hiddenRoutes]]
    }
    return this.getMatches(this.root, possibleRoute, "");
  }
  getMatches(currentNode, possibleRoute, sequence) {
    const route = sequence + currentNode.char;

    // Traverse tree using possible route
    if (possibleRoute !== "") {
      const childNode = currentNode.getChild(possibleRoute.charAt(0));
      if (childNode) {
        return this.getMatches(childNode, possibleRoute.slice(1), route);
      }
      return [[], []];
    }

    // Save route if found
    let matches = [];
    let hiddenMatches = [];
    if (currentNode.isRouteEnd) {
      if (currentNode.isHidden) {
        hiddenMatches.push({'route': route, 'desc': currentNode.routeDesc});
      }
      else {
        matches.push({'route': route, 'desc': currentNode.routeDesc});
      }
    }

    // Check children for partial matches
    if (!currentNode.isLeaf) {
      const children = Object.keys(currentNode.children);
      children.forEach((childKey) => {
        const [nextMatches, nextHiddenMatches] = this.getMatches(currentNode.getChild(childKey), possibleRoute, route);
        matches = matches.concat(nextMatches);
        hiddenMatches = hiddenMatches.concat(nextHiddenMatches);
      });
    }
    return [matches, hiddenMatches];
  }
}

class Node {
  constructor(char = "", isRouteEnd = false, routeDesc = "", isHidden = false) {
    this.char = char;
    this.children = {};
    this.isRouteEnd = isRouteEnd;
    this.isLeaf = true;
    this.routeDesc = routeDesc;
    this.isHidden = isHidden;
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

  setRouteEnd(routeDesc = "", isHidden = false) {
    this.isRouteEnd = true;
    this.isHidden = isHidden;
    this.routeDesc = routeDesc;
  }
}

export default RouteTree;
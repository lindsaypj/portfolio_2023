import { scrollToBottom, scrollToTop } from "../../scripts/scrollUtils";

// Non-sub-routes
export const PRIMARY_ROUTES = [
  '/about_me',
  '/games',
  // '/learning',
  '/portfolio',
];

export const HIDDEN_ROUTES = [
  '/',
  '/dev',
  '/dev/sudoku',
  '/commission'
];

export const TOP_NAV_ROUTES = ['/portfolio', '/games']; // '/learning'

// These routes will be brought into focus on page load if active
export const SCROLLABLE_ROUTES = [
  '',
  '/about_me',
  '/portfolio',
  '/portfolio/automotive',
  '/portfolio/open_source',
  '/portfolio/photography',
  '/portfolio/software',
  '/portfolio/web',
  '/games/sudoku',
  '/games/maze'
];

export const PORTFOLIO_SECTIONS = [
  {'route': '/about_me', 'desc': 'A brief introduction into who I am.'},
  {'route': '/portfolio', 'desc': 'Example projects from various areas of expertise.'},
  {'route': '/portfolio/automotive', 'desc': 'Check out my car related projects.'},
  {'route': '/portfolio/open_source', 'desc': 'Notable open-source contributions.'},
  {'route': '/portfolio/photography', 'desc': 'Some of my favorite shots.'},
  {'route': '/portfolio/software', 'desc': 'Some non-web applications I worked on.'},
  {'route': '/portfolio/web', 'desc': 'Example web projects I\'ve worked on.'},
];

export const GAMES_SECTIONS = [
  {'route': '/games', 'desc': 'A showcase of the games, I\'ve made.'},
  {'route': '/games/sudoku', 'desc': 'Play Sudoku in 4x4, 9x9, or 16x16 variants.'},
  {'route': '/games/maze', 'desc': 'Generate and solve mazes of any size.'},  
];

export const LEARNING_SECTIONS = [
  // {'route': '/learning', 'desc': 'Educational content about software development concepts.'},
  // '/learning/ArrayList',
  // '/learning/Graph',
  // '/learning/HashMap',
  // '/learning/HashSet',
  // '/learning/Heap',
  // '/learning/LinkedList',
  // '/learning/TreeMap',
  // '/learning/TreeSet',
  // '/learning/Stack',
  // '/learning/Queue',
  // '/learning/BellmanFord',
  // '/learning/BinarySearch',
  // '/learning/BreadthFirstSearch',
  // '/learning/DepthFirstSearch',
  // '/learning/Dijkstra',
  // '/learning/FloodFill',
  // '/learning/HeapSort',
  // '/learning/HuffmanCoding',
  // '/learning/MergeSort',
  // '/learning/QuickSort',
  // '/learning/UnionFind',
];

// Paths are like navigation, and will change pages and scroll to section
export const paths = [
  ...GAMES_SECTIONS,
  ...LEARNING_SECTIONS,
  ...PORTFOLIO_SECTIONS,
];

// Methods allow you to interact with the page. This means they are path specific
export const methods = [
  
];

// Commands are like methods, but they are global
export const COMMANDS = [
  {'route': 'top', 'desc': 'Scroll to top of page.'},
  {'route': 'bottom', 'desc': 'Scroll to bottom of page.'},
];

export const commandFunctions = {
  'top': scrollToTop,
  'bottom': scrollToBottom
}

// Routes to clear after execution/navigation
export const CLEAR_AFTER_EXE = {
  '/': true,
  '/about_me': true,
  ...Object.fromEntries(COMMANDS.map((command) => [command.route, true]))
}

export const ROUTE_DESCRIPTIONS = {
  
}

// All routes
const allRoutes = [...paths, ...methods, ...COMMANDS];
export default allRoutes;
// Non-sub-routes
export const PRIMARY_ROUTES = [
  '/about_me',
  '/games',
  // '/learning',
  '/portfolio',
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
  '/portfolio',
  '/portfolio/automotive',
  '/portfolio/open_source',
  '/portfolio/photography',
  '/portfolio/software',
  '/portfolio/web',
];

export const GAMES_SECTIONS = [
  '/games',
  '/games/sudoku',
  '/games/maze',
];

export const LEARNING_SECTIONS = [
  // '/learning',
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
  '/about_me',
  ...GAMES_SECTIONS,
  ...LEARNING_SECTIONS,
  ...PORTFOLIO_SECTIONS,
];

// Methods allow you to interact with the page. This means they are path specific
export const methods = [
  
];

// Commands are like methods, but they are global
export const commands = [
  // ' theme dark',
  // ' theme light',
  // ' help <command>',
  // ' top',
  // ' bottom'
];

// All routes
const allRoutes = [...paths, ...methods, ...commands];
export default allRoutes;
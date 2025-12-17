import { scrollToBottom, scrollToTop } from "../../scripts/scrollUtils";

import WebDevNavImg from '../images/PortfolioNav/WebDevNavImg.jpg';
import SoftwareDevNavImg from '../images/PortfolioNav/JavaNavImg.jpg';
import OpenSourceNavImg from '../images/PortfolioNav/OpenSourceNavImg.png';
import AutomotiveNavImg from '../images/PortfolioNav/AutomotiveNavImg.jpg';
import PhotographyNavImg from '../images/PortfolioNav/PhotographyNavImg.png';

// Non-sub-routes
export const PRIMARY_ROUTES = [
  {'route': '/about_me', 'desc': 'Navigates to about me section. A brief introduction into who I am.'},
  {'route': '/games', 'desc': 'Navigates to a showcase of the games, I\'ve made.'},
  // {'route': '/learning', 'desc': 'Navigates to educational content about software development concepts.'},
  {'route': '/portfolio', 'desc': 'Navigates to portfolio projects from various areas of expertise.'},
];

export const HIDDEN_ROUTES = [
  '/',
  '/dev',
  '/dev/sudoku',
  '/commission'
];

export const TOP_NAV_ROUTES = [
  {'route': '/portfolio', 'desc': 'Navigates to portfolio projects from various areas of expertise.'},
  {'route': '/games', 'desc': 'Navigates to a showcase of the games, I\'ve made.'}
];
  // '/learning'

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
  {'route': '/about_me', 'desc': 'Navigates to about me section. A brief introduction into who I am.'},
  {'route': '/portfolio', 'desc': 'Navigates to portfolio projects from various areas of expertise.'},
  {'route': '/portfolio/automotive', 'desc': 'Navigates to my car related projects.'},
  {'route': '/portfolio/open_source', 'desc': 'Navigates to my notable open-source contributions.'},
  {'route': '/portfolio/photography', 'desc': 'Navigates to some of my favorite shots.'},
  {'route': '/portfolio/software', 'desc': 'Navigates to some non-web applications I\'ve worked on.'},
  {'route': '/portfolio/web', 'desc': 'Navigates to some web projects I\'ve worked on.'},
];

export const PORTFOLIO_HERO_SECTIONS = [
  {'route': '/automotive', 'desc': 'Navigates to my car related projects.', 'img': WebDevNavImg, 'imgAlt': 'Code'},
  {'route': '/open_source', 'desc': 'Navigates to my notable open-source contributions.', 'img': SoftwareDevNavImg, 'imgAlt': 'Gears'},
  {'route': '/photography', 'desc': 'Navigates to some of my favorite shots.', 'img': OpenSourceNavImg, 'imgAlt': 'Unlocked lock'},
  {'route': '/software', 'desc': 'Navigates to some non-web applications I\'ve worked on.', 'img': AutomotiveNavImg, 'imgAlt': 'Check engine light'},
  {'route': '/web', 'desc': 'Navigates to some web projects I\'ve worked on.', 'img': PhotographyNavImg, 'imgAlt': 'Camera'}
]

export const GAMES_SECTIONS = [
  {'route': '/games', 'desc': 'Navigates to a showcase of the games, I\'ve made.'},
  {'route': '/games/sudoku', 'desc': 'Navigates to playable game of sudoku in 4x4, 9x9, or 16x16 variants.'},
  {'route': '/games/maze', 'desc': 'Navigates to maze generation and solving section of games page.'},
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
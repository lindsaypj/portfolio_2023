// Non-sub-routes
export const PRIMARY_ROUTES = [
  '/about_me',
  '/games',
  '/learning',
  '/portfolio',
  '/sudoku'
];

export const TOP_NAV_ROUTES = ['/portfolio', '/games', '/learning'];

// These routes will be brought into focus on page load if active
export const SCROLLABLE_ROUTES = ['', '/about_me', '/portfolio', '/sudoku'];

export const PORTFOLIO_SECTIONS = [
  '/portfolio',
  '/portfolio/automotive',
  '/portfolio/open_source',
  '/portfolio/photography',
  '/portfolio/software',
  '/portfolio/web'
];

// Paths are like navigation, and will change pages and scroll to section
export const paths = [
  '/about_me',
  '/games',
  '/learning',
  ...PORTFOLIO_SECTIONS,
  '/sudoku'
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
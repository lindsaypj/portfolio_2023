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
  ...PORTFOLIO_SECTIONS,
  '/sudoku',
  // '/resume',
  // '/terminal'
];

// Methods allow you to interact with the page. This means they are path specific
export const methods = [
  
];

// Commands are like methods, but they are global
export const commands = [
  // ' theme dark',
  // ' theme light',
  // ' help <command>,'
  // ' top',
  // ' bottom'
];

// All routes
const allRoutes = [...paths, ...methods, ...commands];
export default allRoutes;
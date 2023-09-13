// Paths are like navigation, and will change the rendered content of page
export const paths = [
  '/about_me',
  '/portfolio',
  '/resume',
  '/terminal'
];

// Methods allow you to interact with the page. This means they are path specific
export const methods = [
  '.sudoku()'
];

// Commands are like methods, but they are global
export const commands = [
  ' theme dark',
  ' theme light',
  ' help <command>'
];

// All routes
const allRoutes = [...paths, ...methods, ...commands];
export default allRoutes;
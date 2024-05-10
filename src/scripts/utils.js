// Returns the root of a route (Ex: '/portfolio/automotive' -> '/portfolio')
export const getPrimaryRoute = (route) => {
  const indexOfSlash = route.slice(1).indexOf('/') + 1;
  return indexOfSlash <= 0 ? route : route.slice(0, indexOfSlash);
}

// Coverts PascalCase into snake_case
export const pascalToSnake = (path) => {
  // Replace all uppercase letters with lowercase and prepend with '_'
  const snakeCase = path.replaceAll(/[A-Z]/g, function(char) { return '_' + char.toLowerCase() });
  // Remove first underscore (EX: /_array_list -> /array_list)

  console.log('PascalToSnake: '+snakeCase);
  return snakeCase.replace('_', '');
}
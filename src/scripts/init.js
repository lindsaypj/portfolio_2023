import { LEARNING_CONTENT } from "../resources/text/learning";

export const getInitialAccordionState = (currentRoute) => {
  let initialTopic = '';
  let initialAccordionKey = '';
  if (currentRoute !== '/learning') {
    initialTopic = currentRoute.slice(9);
    initialAccordionKey = LEARNING_CONTENT[initialTopic].group;
  }
  return [initialTopic, initialAccordionKey];
}
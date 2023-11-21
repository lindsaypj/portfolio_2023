const SESSION_KEYS = {
  CURRENT_PAGE: 'currentPage'
};

export const loadSessionPageData = () => {
  const defaultPage = '';

  const currentPageJson = sessionStorage.getItem(SESSION_KEYS.CURRENT_PAGE);
  const currentPage = JSON.parse(currentPageJson) || defaultPage;

  return {
    currentPage
  };
};

export const saveSessionPageData = ({ currentPage }) => {
  const currentPageJson = JSON.stringify(currentPage);
  sessionStorage.setItem(SESSION_KEYS.CURRENT_PAGE, currentPageJson);
};

export const saveSessionValue = (key, value) => {
  const jsonValue = JSON.stringify(value);
  sessionStorage.setItem(key, jsonValue)
};

export const getSessionValue = (key) => {
  const jsonValue = sessionStorage.getItem(key);
  return JSON.parse(jsonValue);
};

export default SESSION_KEYS;
import './styles/App.css';
import SESSION_KEYS, { loadSessionPageData, saveSessionValue } from './scripts/sessionInterface';

import { useCallback, useEffect, useState } from 'react';

import Terminal from './components/Terminal';
import AboutMe from './views/AboutMe';
import Foorter from './components/Footer';
import Portfolio from './views/Portfolio';
import scrollToTop from './scripts/scrollToTop';

function App() {
  const [page, setPage] = useState();
  const [headingTyped, setHeadingTyped] = useState(false);
  const [terminalHero, setTerminalHero] = useState(true);

  useEffect(() => {
    const { currentPage } = loadSessionPageData();
    setPage(currentPage);
  }, []);

  const headingTypedCallback = useCallback(() => {
    setHeadingTyped(true);
  }, []);

  const navChangeCallback = (newPage) => {
    // Update page/session state
    setPage(newPage);
    saveSessionValue(SESSION_KEYS.CURRENT_PAGE, newPage);

    scrollToTop();
  };

  const getContent = useCallback(() => {
    switch(page) {
      case '/about_me':
        return (
          <AboutMe
            headingTypedCallback={headingTypedCallback}
            setTerminalHero={setTerminalHero}
          />
        );
      case '/portfolio':
        return (
          <Portfolio headingTypedCallback={headingTypedCallback} />
        );
      default:
        return (
          <AboutMe
            headingTypedCallback={headingTypedCallback}
            setTerminalHero={setTerminalHero}
          />
        );
    }
  }, [page, headingTypedCallback]);

  return (
    <div className='App app-dark'>
      <main id='main-content'>
        {getContent()}
      </main>
      <div className='app-header app-header-dark'>
        <div className='bottom-nav'>
          <Terminal
            navChangeCallback={navChangeCallback}
            currentRoute={page}
            shouldTypePrefix={headingTyped}
            heroMode={terminalHero}
          />
        </div>
      </div>
      <footer>
        <Foorter />
      </footer>
    </div>
  );
}

export default App;

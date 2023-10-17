import './styles/App.css';
import SESSION_KEYS, { loadSessionPageData, saveSessionValue } from './scripts/sessionInterface';

import { useCallback, useEffect, useState } from 'react';

import AboutMe from './views/AboutMe';
import Foorter from './components/Footer';
import Portfolio from './views/Portfolio';
import scrollToTop from './scripts/scrollToTop';
import Terminal from './components/Terminal';

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
            page={page}
            headingTypedCallback={headingTypedCallback}
            setTerminalHero={setTerminalHero}
            navChangeCallback={navChangeCallback}
            headingTyped={headingTyped}
            terminalHero={terminalHero}
          />
        );
      case '/portfolio':
        return (
          <Portfolio
            page={page}
            headingTypedCallback={headingTypedCallback}
            navChangeCallback={navChangeCallback}
            headingTyped={headingTyped}
            terminalHero={terminalHero}
          />
        );
      default:
        return (
          <>
          <AboutMe
            page={page}
            headingTypedCallback={headingTypedCallback}
            setTerminalHero={setTerminalHero}
            navChangeCallback={navChangeCallback}
            headingTyped={headingTyped}
            terminalHero={terminalHero}
          />
          <Portfolio
            page={page}
            headingTypedCallback={headingTypedCallback}
            navChangeCallback={navChangeCallback}
            headingTyped={headingTyped}
            terminalHero={terminalHero}
          />
          </>
        );
    }
  }, [page, headingTypedCallback, headingTyped, terminalHero]);

  return (
    <div className='App app-dark'>
      <main id='main-content'>
        {getContent()}
      </main>

      {/* Terminal */}
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

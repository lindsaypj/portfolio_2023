import './styles/App.css';
import SESSION_KEYS, { loadSessionPageData, saveSessionValue } from './scripts/sessionInterface';

import { useCallback, useEffect, useState } from 'react';

import AboutMe from './views/AboutMe';
import Foorter from './components/Footer';
import Portfolio from './views/Portfolio';
import Terminal from './components/Terminal';

import scrollToTop from './scripts/scrollToTop';
import useWindowWidth from './hooks/useWindowWidth';
import SudokuGame from './views/SudokuGame';

// CONSTANTS
const MOBILE_BREAKPOINT = 768; // Aligns with Bootstrap MD breakpoint
const REAL_PAGES = ['', '/about_me', '/sudoku'];
const PORTFOLIO_SECTIONS = [
  '/portfolio',
  '/portfolio/automotive',
  '/portfolio/open_source',
  '/portfolio/photography',
  '/portfolio/software',
  '/portfolio/web'
];

function App() {
  const windowWidth = useWindowWidth();

  const { currentPage } = loadSessionPageData();

  const [page, setPage] = useState(currentPage);
  const [headingTyped, setHeadingTyped] = useState(false);
  const [terminalHero, setTerminalHero] = useState(false);
  const [mobileMode, setMobileMode] = useState(true);
  const [shouldScrollToRoute, setShouldScrollToRoute] = useState(REAL_PAGES.includes(currentPage));

  // Handle dynamic titles on page load
  useEffect(() => {
    if (currentPage !== '/about_me' && currentPage !== '') {
      setHeadingTyped(true);
    }
  }, [currentPage]);

  // Check for mobile aspect ratio on width change
  useEffect(() => {
    if (windowWidth > MOBILE_BREAKPOINT) {
      setMobileMode(false);
    } else {
      setMobileMode(true);
    }
  }, [windowWidth]);

  const headingTypedCallback = useCallback(() => {
    setHeadingTyped(true);
  }, []);

  const navChangeCallback = (newPage) => {
    // Update page/session state
    setPage(newPage);
    saveSessionValue(SESSION_KEYS.CURRENT_PAGE, newPage);

    // Scroll to section
    switch(newPage) {
      case '/portfolio':
      case '/portfolio/web':
      case '/portfolio/software':
      case '/portfolio/open_source':
      case '/portfolio/automotive':
      case '/portfolio/photography':
        setShouldScrollToRoute(true);
        break;
      default:
        scrollToTop();
    }
  };

  const getContent = useCallback(() => {
    switch(page) {
      case '/terminal':
        return (
          <></>
        );
      case '/resume':
        return (
          <></>
        );
      case '/sudoku':
        return (
          <SudokuGame />
        );
      default:
        return (
          <>
          <AboutMe
            headingTypedCallback={headingTypedCallback}
            setTerminalHero={setTerminalHero}
            headingTyped={headingTyped}
            mobileMode={mobileMode}
          />
          <Portfolio
            shouldScroll={shouldScrollToRoute && PORTFOLIO_SECTIONS.includes(page)}
            page={page}
            setShouldScrollToRoute={setShouldScrollToRoute}
            mobileMode={mobileMode}
            headingTypedCallback={headingTypedCallback}
          />
          </>
        );
    }
  }, [page, headingTypedCallback, headingTyped, mobileMode, shouldScrollToRoute]);

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
        <Foorter navChangeCallback={navChangeCallback} />
      </footer>
    </div>
  );
}

export default App;

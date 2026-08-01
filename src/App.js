import './styles/App.css';
import SESSION_KEYS, { loadSessionPageData, saveSessionValue } from './scripts/sessionInterface';
import { getPrimaryRoute } from './scripts/utils';
import { scrollToTop } from './scripts/scrollUtils';

import { useCallback, useEffect, useState } from 'react';
import useWindowWidth from './hooks/useWindowWidth';

import AboutMe from './views/AboutMe';
import Commission from './views/Commission';
import Foorter from './components/Footer';
import Games from './views/Games';
import Portfolio from './views/Portfolio';
import Statistics from './views/Statistics';
import Terminal from './components/terminal/Terminal';
import TopNav from './components/nav/TopNav';
import DevPage from './views/DevPage';

import { DETACHED_ROUTES, GAMES_SECTIONS, PORTFOLIO_SECTIONS, SCROLLABLE_ROUTES } from './resources/text/routes';


// CONSTANTS
const GAMES_SECTIONS_ROUTES = GAMES_SECTIONS.map((route) => route.route);
const PORTFOLIO_SECTIONS_ROUTES = PORTFOLIO_SECTIONS.map((route) => route.route);
const MOBILE_BREAKPOINT = 768; // Aligns with Bootstrap MD breakpoint

function App() {
  const windowWidth = useWindowWidth();

  const { currentPage } = loadSessionPageData();

  const [page, setPage] = useState(currentPage);
  const [mobileMode, setMobileMode] = useState(false);
  const [shouldScrollToRoute, setShouldScrollToRoute] = useState(SCROLLABLE_ROUTES.includes(currentPage));
  const [terminalHasFocus, setTerminalHasFocus] = useState(false);


  // Check for mobile aspect ratio on width change
  useEffect(() => {
    if (windowWidth >= MOBILE_BREAKPOINT) {
      setMobileMode(false);
    } else {
      setMobileMode(true);
    }
  }, [windowWidth]);

  const navChangeCallback = (newPage) => {
    // Update page/session state
    setPage(newPage);
    saveSessionValue(SESSION_KEYS.CURRENT_PAGE, newPage);

    // Scroll to section
    const newPageRoot = getPrimaryRoute(newPage);
    switch(newPageRoot) {
      case '/portfolio':
      case '/games':
        setShouldScrollToRoute(true);
        break;
      default:
        scrollToTop();
    }
  };

  const getContent = useCallback(() => {
    const nextRoute = getPrimaryRoute(page);
    
    switch(nextRoute) {
      case '/games':
        return (
          <Games
            currentRoute={page}
            shouldScroll={shouldScrollToRoute && GAMES_SECTIONS_ROUTES.includes(page)}
            setShouldScrollToRoute={setShouldScrollToRoute}
          />
        );

      case '/dev':
        switch (page) {
          case '/dev/sudoku':
            return (
              <DevPage content={'/sudoku'} />
            );
          default:
            return (
              <DevPage />
            );
        }

      case '/commission':
        return (
          <Commission />
        );

      case '/statistics':
        return (
          <Statistics
            mobileMode={mobileMode}
          />
        );

      default:
        return (
          <>
          <AboutMe
            mobileMode={mobileMode}
            terminalHasFocus={terminalHasFocus}
          />
          <Portfolio
            shouldScroll={shouldScrollToRoute && PORTFOLIO_SECTIONS_ROUTES.includes(page)}
            page={page}
            setShouldScrollToRoute={setShouldScrollToRoute}
            mobileMode={mobileMode}
          />
          </>
        );
    }
  }, [page, mobileMode, shouldScrollToRoute, terminalHasFocus]);

  if (DETACHED_ROUTES.includes(page)) {
    return (
      <div className='App app-dark'>
        {getContent()}
      </div>
    )
  }

  else {
    return (
      <div className='App app-dark'>
        <header>
          <TopNav
            navChangeCallback={navChangeCallback}
            mobileMode={mobileMode}
            currentPage={page}
          />
        </header>

        <main id='main-content'>
          {getContent()}
        </main>

        {/* Terminal */}
        <div className='app-header app-header-dark'>
          <div className='bottom-nav'>
            <Terminal
              navChangeCallback={navChangeCallback}
              currentRoute={page}
              terminalHasFocus={terminalHasFocus}
              setTerminalHasFocus={setTerminalHasFocus}
            />
          </div>
        </div>
        
        <footer>
          <Foorter navChangeCallback={navChangeCallback} />
        </footer>
      </div>
    );
  }
}

export default App;

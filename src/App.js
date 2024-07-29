import './styles/App.css';
import SESSION_KEYS, { loadSessionPageData, saveSessionValue } from './scripts/sessionInterface';
import { getPrimaryRoute } from './scripts/utils';
import scrollToTop from './scripts/scrollToTop';
import { getInitialAccordionState } from './scripts/init';

import { useCallback, useEffect, useMemo, useState } from 'react';
import useWindowWidth from './hooks/useWindowWidth';

import AboutMe from './views/AboutMe';
import Foorter from './components/Footer';
import Games from './views/Games';
import Learning from './views/Learning';
import Portfolio from './views/Portfolio';
import SudokuGame from './views/SudokuGame';
import Terminal from './components/Terminal';
import TopNav from './components/TopNav';

import { GAMES_SECTIONS, LEARNING_SECTIONS, PORTFOLIO_SECTIONS, SCROLLABLE_ROUTES } from './resources/text/routes';


// CONSTANTS
const MOBILE_BREAKPOINT = 768; // Aligns with Bootstrap MD breakpoint

function App() {
  const windowWidth = useWindowWidth();

  const { currentPage } = loadSessionPageData();

  let initialTopic, initialAccordionKey;
  if (getPrimaryRoute(currentPage) === '/learning') {
    [initialTopic, initialAccordionKey] = getInitialAccordionState(currentPage);
  }

  const [page, setPage] = useState(currentPage);
  const [headingTyped, setHeadingTyped] = useState(currentPage !== '/about_me' && currentPage !== '');
  const [terminalHero, setTerminalHero] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  const [shouldScrollToRoute, setShouldScrollToRoute] = useState(SCROLLABLE_ROUTES.includes(currentPage));

  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [accordionKey, setAccordionKey] = useState(initialAccordionKey);
  const accordionControls = useMemo(() => (
    {
      selectedTopic: selectedTopic,
      setSelectedTopic: setSelectedTopic,
      accordionKey: accordionKey,
      setAccordionKey: setAccordionKey
    }
  ), [selectedTopic, accordionKey]);

  // Handle dynamic titles on page load
  useEffect(() => {
    if (currentPage !== '/about_me' && currentPage !== '') {
      setHeadingTyped(true);
    }
  }, [currentPage]);

  // Check for mobile aspect ratio on width change
  useEffect(() => {
    if (windowWidth >= MOBILE_BREAKPOINT) {
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
    const newPageRoot = getPrimaryRoute(newPage);
    switch(newPageRoot) {
      case '/portfolio':
      case '/learning':
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
            headingTypedCallback={headingTypedCallback}
            shouldScroll={shouldScrollToRoute && GAMES_SECTIONS.includes(page)}
            setShouldScrollToRoute={setShouldScrollToRoute}
          />
        );
      case '/learning':
        return (
          <Learning
            headingTypedCallback={headingTypedCallback}
            mobileMode={mobileMode}
            currentRoute={page}
            navChangeCallback={navChangeCallback}
            shouldScroll={shouldScrollToRoute && LEARNING_SECTIONS.includes(page)}
            setShouldScrollToRoute={setShouldScrollToRoute}
            {...accordionControls}
          />
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
  }, [page, headingTypedCallback, headingTyped, mobileMode, shouldScrollToRoute, accordionControls]);

  return (
    <div className='App app-dark'>
      <header>
        <TopNav
          navChangeCallback={navChangeCallback}
          mobileMode={mobileMode}
          currentPage={page}
          {...accordionControls}
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

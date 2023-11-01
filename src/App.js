import './styles/App.css';
import SESSION_KEYS, { loadSessionPageData, saveSessionValue } from './scripts/sessionInterface';

import { useCallback, useEffect, useRef, useState } from 'react';

import AboutMe from './views/AboutMe';
import Foorter from './components/Footer';
import Portfolio from './views/Portfolio';
import Terminal from './components/Terminal';

import scrollToTop from './scripts/scrollToTop';

function App() {
  const [page, setPage] = useState();
  const [headingTyped, setHeadingTyped] = useState(false);
  const [terminalHero, setTerminalHero] = useState(true);

  // Scrollable References
  const portfolio = useRef();

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

    switch(newPage) {
      case '/portfolio':
        portfolio.current.scrollIntoView({ behavior: "smooth" });
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
      default:
        return (
          <>
          <AboutMe
            headingTypedCallback={headingTypedCallback}
            setTerminalHero={setTerminalHero}
            headingTyped={headingTyped}
            
          />
          <Portfolio
            scrollRef={portfolio}
            headingTypedCallback={headingTypedCallback}
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
        <Foorter navChangeCallback={navChangeCallback} />
      </footer>
    </div>
  );
}

export default App;

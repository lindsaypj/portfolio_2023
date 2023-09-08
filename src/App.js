import './styles/App.css';
import { loadSessionData } from './scripts/sessionInterface';

import { useState } from 'react';

import Terminal from './components/Terminal';
import AboutMe from './views/AboutMe';
import Foorter from './components/Footer';

function App() {
  const {currentPage} = loadSessionData();

  const [page, setPage] = useState();
  const [headingTyped, setHeadingTyped] = useState(false);
  const [terminalHero, setTerminalHero] = useState(true);

  const headingTypedCallback = () => {
    setHeadingTyped(true);
  }

  const navChangeCallback = () => {

  }

  loadSessionData()

  return (
    <div className='App app-dark'>
      <header className='app-header app-header-dark'>
        <div className='bottom-nav'>
          <Terminal
            navChangeCallback={navChangeCallback}
            shouldType={headingTyped}
            heroMode={terminalHero}
          />
        </div>
      </header>
      <main>
        <AboutMe
          displayHeading={true}
          headingTypedCallback={headingTypedCallback}
          setTerminalHero={setTerminalHero}
        />
      </main>
      <Foorter />
    </div>
  );
}

export default App;

import { useState, useRef, useCallback } from 'react';
import './TerminalPortfolio.css';
import { PROMPT } from './constants';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import RedTeamPage from './pages/RedTeamPage';
import WriteupNetSec from './pages/WriteupNetSec';
import WriteupSigned from './pages/WriteupSigned';
import WriteupSmol from './pages/WriteupSmol';
import OpensourcePage from './opensourcepage/OpensourcePage';
import TJJavaPage from './opensourcepage/TJJavaPage';
import FlixelGDXPage from './opensourcepage/FlixelGDXPage';

const PAGE_TITLES = {
  home: 'Eric Edwards ~ warp',
  about: 'About Me ~ warp',
  projects: 'Projects ~ warp',
  redteam: 'Red Team ~ warp',
  opensource: 'Open Source ~ warp',
  'oss-tjjava': 'TJ Java ~ warp',
  'oss-flixelgdx': 'FlixelGDX ~ warp',
  'writeup-netsec': 'Net Sec Challenge ~ warp',
  'writeup-signed': 'Signed Messages ~ warp',
  'writeup-smol': 'Smol ~ warp',
};

const PAGE_COMPONENTS = {
  about: AboutPage,
  projects: ProjectsPage,
  redteam: RedTeamPage,
  opensource: OpensourcePage,
  'oss-tjjava': TJJavaPage,
  'oss-flixelgdx': FlixelGDXPage,
  'writeup-netsec': WriteupNetSec,
  'writeup-signed': WriteupSigned,
  'writeup-smol': WriteupSmol,
};

export default function TerminalPortfolio() {
  const [page, setPage] = useState('home');
  const bodyRef = useRef(null);

  const navigate = useCallback((p) => {
    setPage(p);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, []);

  const PageComponent = PAGE_COMPONENTS[page];

  return (
    <div className="terminal-portfolio">
      <div className="terminal-window">
        {/* Title bar */}
        <div className="terminal-titlebar">
          <div className="terminal-buttons">
            <span className="terminal-btn terminal-btn--close" />
            <span className="terminal-btn terminal-btn--minimize" />
            <span className="terminal-btn terminal-btn--maximize" />
          </div>
          <span className="terminal-title">{PAGE_TITLES[page] || 'Eric Edwards ~ warp'}</span>
          <div className="terminal-titlebar-spacer" />
        </div>

        {/* Body */}
        <div className="terminal-body" ref={bodyRef}>
          {page === 'home' ? (
            <HomePage navigate={navigate} />
          ) : (
            <>
              {/* Decorative cd command */}
              <div className="term-line term-muted">
                {PROMPT} ~ % cd {page}
              </div>
              <div className="term-spacer" />
              <div className="term-line term-muted">
                {PROMPT} ~/{page} % ls -la
              </div>
              <div className="term-spacer" />

              {/* Page content */}
              <PageComponent navigate={navigate} />

              {/* Navigation footer */}
              <div className="term-spacer-lg" />
              <div className="term-line term-muted">
                {PROMPT} ~/{page} % cd ..
              </div>
              <div className="term-spacer" />
              <div className="term-line">
                {PROMPT} ~ % ls
              </div>
              <div className="term-spacer" />
              <div className="nav-footer">
                {page.startsWith('writeup-') && (
                  <button className="link-btn" onClick={() => navigate('redteam')}>
                    ← WRITEUPS
                  </button>
                )}
                {page.startsWith('oss-') && (
                  <button className="link-btn" onClick={() => navigate('opensource')}>
                    ← OPEN SOURCE
                  </button>
                )}
                <button className="link-btn" onClick={() => navigate('home')}>
                  ← HOME
                </button>
              </div>
              <div className="term-spacer-lg" />
              <div className="signature">Always Building Something</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

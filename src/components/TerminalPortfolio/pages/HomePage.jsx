import { useState, useEffect } from 'react';
import pfp from '../../../assets/pfp.jpg';
import { LINKS, PROMPT } from '../constants';
import { typeText, wait } from '../helpers';
import GlitchReveal from '../GlitchReveal';

export default function HomePage({ navigate }) {
  const [step, setStep] = useState(0);
  const [nameRevealed, setNameRevealed] = useState(false);
  const [typing1, setTyping1] = useState('');
  const [typing2, setTyping2] = useState('');
  const [typing3, setTyping3] = useState('');

  useEffect(() => {
    const cmds = ['whoami', 'cat welcome.txt', 'ls -la links/'];
    const delays = [400, 400, 400];
    let cancelled = false;

    async function runSequence() {
      await typeText(cmds[0], 40, 400, (t) => !cancelled && setTyping1(t));
      if (cancelled) return;
      await wait(delays[0]);
      if (cancelled) return;
      setStep(1);

      await wait(200);
      if (cancelled) return;
      setStep(2);
      await typeText(cmds[1], 40, 100, (t) => !cancelled && setTyping2(t));
      if (cancelled) return;
      await wait(delays[1]);
      if (cancelled) return;
      setStep(3);

      await wait(200);
      if (cancelled) return;
      setStep(4);
      await typeText(cmds[2], 40, 100, (t) => !cancelled && setTyping3(t));
      if (cancelled) return;
      await wait(delays[2]);
      if (cancelled) return;
      setStep(5);
    }

    runSequence();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <div className="term-line term-muted">
        Last login: {new Date().toDateString()} on ttys000
      </div>
      <div className="term-spacer" />

      <div className="term-line">
        <span className="prompt">{PROMPT} ~ %</span>{' '}
        <span className="cmd">{typing1}</span>
        {step === 0 && <span className="cursor" />}
      </div>
      {step >= 1 && (
        <>
          <div className="term-spacer" />
          <div className="term-line term-large">Entry-level software engineer</div>
          <div className="term-spacer" />
        </>
      )}

      {step >= 2 && (
        <div className="term-line">
          <span className="prompt">{PROMPT} ~ %</span>{' '}
          <span className="cmd">{typing2}</span>
          {step === 2 && <span className="cursor" />}
        </div>
      )}

      {step >= 3 && (
        <>
          <div className="term-spacer" />
          <div className="welcome-block">
            <img src={pfp} alt="Eric Edwards" className="welcome-pfp" />
            <div className="welcome-text">
              {nameRevealed ? (
                <span className="welcome-name">Eric Edwards</span>
              ) : (
                <GlitchReveal text="Eric Edwards" onDone={() => setNameRevealed(true)} />
              )}
            </div>
          </div>
          <div className="term-spacer" />
        </>
      )}

      {step >= 4 && (
        <div className="term-line">
          <span className="prompt">{PROMPT} ~ %</span>{' '}
          <span className="cmd">{typing3}</span>
          {step === 4 && <span className="cursor" />}
        </div>
      )}

      {step >= 5 && (
        <>
          <div className="term-spacer" />
          <div className="link-grid">
            {LINKS.map((link) =>
              link.page ? (
                <button
                  key={link.label}
                  className="link-btn"
                  onClick={() => navigate(link.page)}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <div className="term-spacer-lg" />
          <div className="signature">Always Building Something</div>
        </>
      )}
    </>
  );
}

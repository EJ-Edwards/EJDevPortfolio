import { useState, useEffect } from 'react';

export default function GlitchReveal({ text, onDone }) {
  const chars = '█▓▒░▀▄▌▐│─┤├┬┴┼';
  const [display, setDisplay] = useState('');
  const len = text.length;

  useEffect(() => {
    let revealed = 0;
    setDisplay(
      Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    );
    const interval = setInterval(() => {
      revealed++;
      if (revealed >= len) {
        clearInterval(interval);
        setDisplay(text);
        onDone?.();
        return;
      }
      setDisplay(
        text.slice(0, revealed) +
          Array.from({ length: len - revealed }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')
      );
    }, 45);
    return () => clearInterval(interval);
  }, [text, len, onDone]);

  return <span className="glitch-text">{display}</span>;
}

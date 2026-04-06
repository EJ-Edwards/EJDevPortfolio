import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose, VscChromeRestore } from 'react-icons/vsc';
import './Window.css';

export default function Window({
  title,
  icon,
  children,
  isActive,
  isMinimized,
  defaultSize,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
}) {
  const nodeRef = useRef(null);
  const [maximized, setMaximized] = useState(false);
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - defaultSize.width - 100) * 0.5 + 80,
    y: Math.random() * (window.innerHeight - defaultSize.height - 150) * 0.4 + 40,
  });
  const [size, setSize] = useState(defaultSize);
  const [preMaxState, setPreMaxState] = useState(null);

  const handleMaximize = () => {
    if (maximized) {
      if (preMaxState) {
        setPosition(preMaxState.position);
        setSize(preMaxState.size);
      }
      setMaximized(false);
    } else {
      setPreMaxState({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 52 });
      setMaximized(true);
    }
  };

  const handleDrag = (_e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  if (isMinimized) return null;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window__titlebar"
      position={maximized ? { x: 0, y: 0 } : position}
      onDrag={handleDrag}
      disabled={maximized}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className={`window ${isActive ? 'window--active' : 'window--inactive'} ${maximized ? 'window--maximized' : ''}`}
        style={{
          width: size.width,
          height: size.height,
          zIndex: zIndex,
        }}
        onMouseDown={onFocus}
      >
        <div className="window__titlebar">
          <div className="window__titlebar-left">
            <span className="window__icon">{icon}</span>
            <span className="window__title">{title}</span>
          </div>
          <div className="window__controls">
            <button className="window__btn window__btn--minimize" onClick={onMinimize}>
              <VscChromeMinimize />
            </button>
            <button className="window__btn window__btn--maximize" onClick={handleMaximize}>
              {maximized ? <VscChromeRestore /> : <VscChromeMaximize />}
            </button>
            <button className="window__btn window__btn--close" onClick={onClose}>
              <VscChromeClose />
            </button>
          </div>
        </div>
        <div className="window__body">{children}</div>
      </div>
    </Draggable>
  );
}

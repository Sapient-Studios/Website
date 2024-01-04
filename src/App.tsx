import { useState, useEffect, useRef } from 'react';
import './App.css';
import CurvedLinesWithGradient from './components/CurvedLines';
import Navbar from './components/Navbar';
import HeroPage from './sections/HeroPage';
import SolutionsPage from './sections/SolutionsPage';
import ApproachPage from './sections/ApproachPage';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  const [isCursorInside, setCursorInside] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ left: e.clientX, top: e.clientY });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setCursorInside(true);
  };

  const handleMouseLeave = () => {
    setCursorInside(false);
  };

  return (
    <div className="App">
      <div
        className={`cursor ${isCursorInside ? 'visible' : ''}`}
        style={{ left: cursorPosition.left, top: cursorPosition.top }}
        id="cursor"
      ></div>

      <div className="cursor-target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='curved-lines-container' >
          <CurvedLinesWithGradient />
        </div>
        <HeroPage />
      </div>
      <Navbar onHeightChange={setNavbarHeight} />
      <SolutionsPage navbarHeight={navbarHeight} />
      <ApproachPage />
    </div>
  );
}

export default App;

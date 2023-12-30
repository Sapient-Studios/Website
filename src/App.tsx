import { useState } from 'react';
import './App.css';
import CurvedLinesWithGradient from './components/CurvedLines';
import Navbar from './components/Navbar';
import HomePage from './sections/Homepage';
import SolutionsPage from './sections/SolutionsPage';

function App() {

  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <div className="App">
      <div className='curved-lines-container'>
        <CurvedLinesWithGradient />
      </div>
      <HomePage />
      <Navbar onHeightChange={setNavbarHeight} />
      <SolutionsPage navbarHeight={navbarHeight} />
    </div>
  );
}

export default App;

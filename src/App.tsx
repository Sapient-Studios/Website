import { useState, useEffect, useRef } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroPage from './sections/HeroPage';
import SolutionsPage from './sections/SolutionsPage';
import ApproachPage from './sections/ApproachPage';
import ContactPage from './sections/ContactPage';
import Footer from './components/Footer';
import CursorAnimation from './components/CursorLogic';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <div className="App" >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <CursorAnimation />
          <HeroPage />
          <Navbar onHeightChange={setNavbarHeight} />
          <SolutionsPage navbarHeight={navbarHeight} />
          <ApproachPage />
          <ContactPage navbarHeight={navbarHeight} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

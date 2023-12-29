import './App.css';
import CurvedLinesWithGradient from './components/CurvedLines';
import HomePage from './sections/Homepage';

function App() {
  return (
    <div className="App">
      <div className='curved-lines-container'>
        <CurvedLinesWithGradient />
      </div>
      <HomePage />
    </div>
  );
}

export default App;

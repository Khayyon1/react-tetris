import logo from './logo.svg';
import './App.css';

import GridBoard from './components/GridBoard';
import nextBlock from './components/nextBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Tetris Redux
        </h1>
      </header>
      <GridBoard />
      <nextBlock />
    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.css';
import Game from './components/game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Game for Grandma</h1>
      </header>
      <Game/>
    </div>
  );
}

export default App;
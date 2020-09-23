import React from 'react';
import { StopWatch } from './features/stopwatch/StopWatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Stop Watch</p>
        <StopWatch />
      </header>
    </div>
  );
}

export default App;
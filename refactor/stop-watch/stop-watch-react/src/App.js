import React from 'react';
// import Helmet from 'react-helmet';
import './App.css';

function App() {

  let model = {
    running: false,
    time: 110
  };

  let intents = {
    TICK: 'TICK',
    START: 'START',
    STOP: 'STOP',
    RESET: 'RESET'
  };

  let minutes = Math.floor(model.time / 60);
  let seconds = model.time - (minutes * 60);
  let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;
  let handler = (event) => {
    model = update(model, model.running ? 'STOP' : 'START');
  };

  const update = (model, intents) => {
    const updates = {
      'START': (model) => Object.assign(model, {running: true}),
      'STOP': (model) => Object.assign(model, {running: false}),
      'TICK': (model) => Object.assign(model, {time: model.time + model.running ? 1 : 0})
    };
    return updates[intents](model);
  };

  setInterval(() => {
    model = update(model, 'TICK');
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <title>stop watch app</title>
      </header>
      {/* <div>{model.time}</div> */}
      <div>{minutes} : {secondsFormatted}</div>
      <button onClick={handler}>{model.running ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;

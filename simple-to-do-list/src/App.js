import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    items: [],
    text: ""
  });

  const handleChange = (event) => {
    setState({text: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.text.length === 0) {
      return;
    };
    const newItem = {
      text: state.text,
    };
    setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  };

  return (
    <div className="App">
      <h3>To Do List</h3>
      <form onSubmit={handleSubmit}>
        <label>What needs to be done?</label>
        <input onChange={handleChange} id="todo" value={state.text} />
        <button>Add #{state.items.length + 1}</button>
      </form>
      <p>The following are what you have done: </p>
      {/* {props.state.items.map(item => (
        <li key={item.id}>{props.item.text}</li>
      ))} */}
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [listVals, setListVal] = useState([]);

  const handleChange = e => {
    setInputVal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setListVal([...listVals, inputVal]);
    setInputVal("");
  };

  return (
    <div className="App">
      <h3>To Do List</h3>
      <form onSubmit={handleSubmit}>
        <label>What needs to be done?</label>
        <input
          onChange={handleChange}
          id="todo"
          value={inputVal}
          placeholder="Enter a To Do Task"
        />
        <button>Add # {listVals.length + 1}</button>
      </form>
      <p>The following are what you have done: </p>
      <ul>
        {listVals.map((listVal, index) => (
          <li key={index}>{listVal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

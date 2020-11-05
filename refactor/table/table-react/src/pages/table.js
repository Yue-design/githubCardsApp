import React, { useState } from "react";
import "../App.css";

function Table() {
  const [inputVal, setInputval] = useState("");
  const [listVals, setListVals] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setListVals([...listVals, inputVal]);
    setInputval("");
  };

  return (
    <div className="simple-input">
      <form onSubmit={handleSubmit}>
        <p></p>
        <input
          onChange={event => setInputval(event.target.value)}
          value={inputVal}
          placeholder="Input some text and press enter..."
        />
        <p>The input value is: {inputVal}</p>
        <hr />
        <p>Previous values are: </p>
        {listVals.length === 0 ? (
          <p>The array is empty!</p>
        ) : (
          <ul>
            {listVals.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default Table;

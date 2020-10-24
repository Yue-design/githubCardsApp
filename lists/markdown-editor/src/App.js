import React, { useState } from "react";
import Remarkable from "remarkable-react";
import "./App.css";

function createMarkup() {
  return { __html: "First &middot; Second" };
}

// function getRawMarkup() {
//   let md = new Remarkable();
//   return { __html: md.render() };
// }

function MarkdownEditor(props) {
  const [state, setState] = useState({
    value: "Hello, **world**!"
  });

  const handleChange = e => {
    setState({ value: e.target.value });
  };

  return (
    <div className="App">
      <h3>Input</h3>
      <label htmlFor="markdown-content">Enter some markdown</label>
      <textarea
        id="markdown-content"
        type="text"
        onChange={handleChange}
        defaultValue={state.value}
      />
      <h3>Output</h3>
      {/* <div dangerouslySetInnerHTML={getRawMarkup()} /> */}
      <div dangerouslySetInnerHTML={createMarkup()} />
      <div>{state.value}</div>
    </div>
  );
}

export default MarkdownEditor;

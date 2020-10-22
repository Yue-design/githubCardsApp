import React, {useState} from 'react';
import Remarkable from 'remarkable-react';
import './App.css';

function MarkdownEditor(props) {

  let md = new Remarkable();

  const [state, setState] = useState({
    value: 'Hello World!'
  });

  const handleChange = (e) => {
    setState({value: e.target.value});
  };

  const getRawMarkup = () => {
    return;
    // let md = new Remarkable();
    // return {__html: md.render()};
  };

  return (
    <div className="App">
      <h3>Input</h3>
      <label htmlFor="markdown-content">Enter some markdown</label>
      <textarea id="markdown-content" onChange={handleChange} defaultValue={state.value}/>
      <h3>Output</h3>
      <div dangerouslySetInnerHTML={getRawMarkup()}/>
      <div>{state.value}</div>
    </div>
  );
}

export default MarkdownEditor;

import React, { useState } from "react";
import "./App.css";
import ConditionalDisplay from "./conditionalDisplay";
import Sum from "./Sum";

function App(props) {
  const [state, setState] = useState({
    showSum: true
  });

  return (
    <ConditionalDisplay isVisible={state.showSum}>
      <h1>
        A <span>Sum</span>
      </h1>
      <Sum a={4} b={2} />
    </ConditionalDisplay>
  );
}

export default App;

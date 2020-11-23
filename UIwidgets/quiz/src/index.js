import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
import reportWebVitals from "./reportWebVitals";
import { shuffle, sample } from "underscore";

const answers = [
  {
    name: "addition",
    imageUrl: "logo.svg",
    imageSource: "Wikimedia Commons",
    abank: ["1", "2", "3", "4"]
  }
];

const getTurnData = answers => {
  const allAnswers = answers.reduce((p, c, i) => {
    return p.concat(c.abank);
  }, []);
  const randomAnswers = shuffle(allAnswers).slice(0, 1);
  const ans = sample(randomAnswers);

  return {
    abank: randomAnswers,
    operation: answers.find(answer => answer.abank.some(title => title === ans))
  };
};

const state = {
  turnData: getTurnData(answers)
  // turnData: {
  //   operation: answers[0],
  //   abank: answers[0].abank
  // }
};

ReactDOM.render(
  <React.StrictMode>
    <Quiz {...state} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

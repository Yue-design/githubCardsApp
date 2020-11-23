import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
import reportWebVitals from "./reportWebVitals";
import { shuffle, sample } from "underscore";

const questions = [
  {
    name: "Cyber Security",
    imageUrl: "images/informationIteracy/cyber.jpg",
    category: ["information iteracy"]
  },
  {
    name: "Information Retrieval",
    imageUrl: "images/informationIteracy/search.png",
    category: ["information iteracy"]
  },
  {
    name: "Coding",
    imageUrl: "images/programmingLanguages/react.png",
    category: ["programming lanaguage"]
  }
];

const getTurnata = questions => {
  const allCatetory = questions.reduce((p, c, i) => {
    return p.concat(c.category);
  }, []);

  const twoRandomCategory = shuffle(allCatetory).slice(0, 2);
  const answer = sample(twoRandomCategory);

  return {
    category: twoRandomCategory,
    question: questions.find(question =>
      question.category.some(title => title === answer)
    )
  };
};

const state = {
  turnData: getTurnata(questions),
  highlight: ""
  // turnData: {
  //   question: questions[0],
  //   category: questions[0].category
  // }
};

const onAnswerSelected = answer => {
  const isCorrect = state.turnData.question.category.some(
    category => category === answer
  );
  state.highlight = isCorrect ? "correct" : "wrong";
  render();
};

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Quiz {...state} onAnswerSelected={onAnswerSelected} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

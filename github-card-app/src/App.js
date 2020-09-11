import React from "react";
import "./App.css";
import Card from "./Card";
import CardList from "./CardList";
import Form from "./Form";

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"}
]

function App() {
  return (
    <div>
      <div className="header">The Github Cards App</div>
      <div>
        <Form />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <CardList profiles={testData}/>
      </div>
    </div>
  );
}

export default App;

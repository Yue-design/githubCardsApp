import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Form from "./components/Form";

const App = props => {
  const [profiles, setProfiles] = useState([]);

  const handleNewProfile = (profileData) => {
    setProfiles(prevState => ([
      [...prevState.profiles, profileData],
    ]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>{props.title}</div>
        <a
          className="App-link"
          href="https://github.com/Yue-design/githubCardsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <Form onSubmit={handleNewProfile}></Form>
        <CardList profiles={profiles} />
      </header>
      {/* <CardList></CardList> */}
    </div>
  );
};

export default App;
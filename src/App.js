import logo from './logo.svg';
import './App.css';
import React from "react";

//Create Element - 1
const SayHello = () => {
  return (
      React.createElement("h1", {
             class: "title"
           }, "Hello")
  )
}

// JSX (Javascript Extension)- 2
const SayHello2 = () => {
    const name = "Holden"
  return <h1>Hello {name}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SayHello />
        <SayHello2 />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

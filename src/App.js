import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Styling";

//Create Element - 1
const SayHello = () => {
  return (
      React.createElement("h1", {
             class: "title"
           }, "Hello")
  )
}

// JSX (Javascript Extension)- 2
const SayHello2 = (props) => {
  return <h1>Hello {props.name}</h1>
}

function App() {
    const [name, setName] = React.useState("Enigma")
    const [isActive, setIsActive] = React.useState()
    React.useEffect(() => {
        console.log("mounting")
    },[])

    console.log("Initialization")
  return (
    <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        {/*<SayHello />*/}
        <SayHello2 name={name} />
          <SayHello2 name={14022} />
        <button onClick={() => {
            setName("Enigma Cipta Humanika")
        }}>Ubah saya!</button>

    </div>
  );
}

export default App;

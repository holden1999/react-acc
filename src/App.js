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
const SayHello2 = (props) => {
  return <h1>Hello {props.name}</h1>
}

const styles = () => {
    return {
        backgroundColor:"black",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    }
}

const Header = (props) => {
    return (
        <div>
            <h1 style={{backgroundColor:"red"}}>Ini Header</h1>
            <h1 style={styles.header(props.active)}>Ini Header</h1>
            <h1 style={styles.body}>test</h1>

            <h1 className={"header body"}>Ini Header</h1>
        </div>
    )
}

function App() {
    const [isActive, setIsActive] = React.useState()
    React.useEffect(() => {
        console.log("mounting")
    },[])

    console.log("Initialization")
  return (
    <div className="App">
        <header style={styles(isActive)}>
        <img src={logo} className="App-logo" alt="logo" />
        {/*<SayHello />*/}
            <button onClick={() => {
                setIsActive(!isActive)
            }}>Click me</button>
        </header>
    </div>
  );
}

export default App;

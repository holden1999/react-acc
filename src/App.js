import React from "react";
import './App.css';

function setState(value) {

}


function onSubmit() {
    
}

function App() {
    const nameRef = React.useRef(null)

    // React.useEffect(()=>{
    //     if (nameRef != null) {
    //         console.log(nameRef)
    //     }
    // },[nameRef])


    return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <input
          type={"text"}
          name={"name"}
          ref={(ref) => nameRef(ref)}
          onChange={(event )=> setState(event.target.value)}
          />
          <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default App;

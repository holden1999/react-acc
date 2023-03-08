import React from "react";

const CounterOutput = () => {
    const value = React.useContext(CounterOutput)
    return (
        <h3>Current counter: {value.counter}</h3>
    )
}

export default CounterOutput
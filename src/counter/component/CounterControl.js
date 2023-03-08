import React from "react";
import {CounterContext} from "../../context/Counter";

const CounterControl = (props) => {
    const value = React.useContext(CounterContext)
    return (
        <button onClick={value.onClick}>
            {props.label}
        </button>
    )
}

export default CounterControl
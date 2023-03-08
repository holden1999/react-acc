import React from "react";
import CounterOutput from "./component/CounterOutput";
import CounterControl from "./component/CounterControl";
import {CounterContext, CounterProvider} from "../context/Counter";

const CounterDisplay = () => {

    return (
        <CounterProvider>
            <CounterContext.Consumer>
                {(value) => {
                return (
                    <>
                        <CounterOutput label={value.counter} />
                        <CounterControl label={"Increment"}
                                        onClick={value.increment} />
                        <CounterControl label={"Decrement"}
                                        onClick={value.decrement} />
                    </>
                )}
                }

            </CounterContext.Consumer>
        </CounterProvider>
    )
}

export default CounterDisplay
import React from "react";

export const CounterContext = React.createContext(null)

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = React.useState(0)

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return (
        <CounterContext.Provider value={{
            counter, increment, decrement
        }}>
            {children}
        </CounterContext.Provider>
    )
}
import Header  from "./Header";
import React from "react";
import {DarkModeContext} from "../context/Theme";

const Main = () => {
    const {isDarkMode} = React.useContext(DarkModeContext)
    const style = {
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
        margin: "-8px",
        minHeight: "100vh",
        boxSizing: "border-box"
    }

    return (
        <main style={style}>
            <Header />
            <h1>Welcome to upskilling react!</h1>
        </main>
    )
}

export default Main
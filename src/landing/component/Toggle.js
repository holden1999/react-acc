import React from "react";
import Button from "./Button";
import {DarkModeContext} from "../context/Theme";

const ToggleButton = () => {
    const {toggleDarkMode} = React.useContext(DarkModeContext)

    return (
        <Button onClick={toggleDarkMode}>Switch Mode</Button>
    )
}

export default ToggleButton
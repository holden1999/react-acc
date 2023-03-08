import React from "react";
import {DarkModeContext} from "../context/Theme";

const Button = ({children, ...rest}) => {
    const {isDarkMode} = React.useContext(DarkModeContext)

    const style = {
        padding: 10,
        color: "inherit",
        border: "1px solid",
        backgroundColor: isDarkMode ? "#333" : "#CCC"
    }

    return (
        <button style={style} {...rest}>
            {children}
        </button>
    )
}

export default Button
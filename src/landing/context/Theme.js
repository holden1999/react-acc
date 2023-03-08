import React, {createContext} from "react";

export const DarkModeContext = createContext(null)

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = React.useState(false)
    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    return (
        <DarkModeContext.Provider value={{
        }
        }>
            {children}
        </DarkModeContext.Provider>
    )
}



// 2 - Create a custom provider component to manage state 

import { useState } from "react";
import { ThemeContext } from "./GenericContext";

export function ThemeProvider({children}) {
    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? "dark" : "light"));
    }

    const value = {
        theme,
        setTheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
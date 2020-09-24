import React, { useEffect } from 'react'
import { ThemeContext, themes } from './../context/theme-context'
import useToggle from './../lib/useToggle'

const ThemeProvider = ({ children }) => {
    const [themeStatus, onToggle] = useToggle();

    useEffect(() => {
        console.log(themeStatus);
        const mode = themeStatus ? 'dark' : 'light';
        setTheme(mode);
    }, [themeStatus])

    const setTheme = (name) => {
        document.body.style.setProperty("--color", themes[name].color); document.body.style.setProperty("--background-color", themes[name].backgroundColor);
    };

    return (
        <ThemeContext.Provider value={{
            theme: themeStatus ? 'dark' : 'light',
            toggleTheme: onToggle
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
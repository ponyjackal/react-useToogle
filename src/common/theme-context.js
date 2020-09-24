import React from 'react'

export const themes = {
    light: {
        color: "#343434",
        backgroundColor: "#fefefe",
    },
    dark: {
        color: "#fff",
        backgroundColor: "#3f3f3f",
    },
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { }
})
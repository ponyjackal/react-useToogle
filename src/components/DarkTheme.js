import React, { useContext } from 'react'
import { ThemeContext } from './../context/theme-context'

const DarkTheme = () => {

    const themeContext = useContext(ThemeContext)
    const onToggle = themeContext.toggleTheme

    return (
        <nav>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" onChange={onToggle} id="checkbox" />
                    <div className="slider round"></div>
                </label>
                <em>Enable Dark Mode!</em>
            </div>
        </nav>
    )
}

export default DarkTheme;
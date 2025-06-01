import { themes } from "./globalVariables.js";
import { setToggleThemeInLocalStorage, setIcon } from "./setThemeAndIcon.js";

function applyTheme() {
    const theme = themes[localStorage.getItem('theme') || 'light']
    Object.keys(theme).forEach(property => {
        document.documentElement.style.setProperty(property, theme[property])
        // console.log(property," ", theme[property]);
    })
}

function toggleTheme() {
    setToggleThemeInLocalStorage()
    setIcon()
    applyTheme()
}

export {
    applyTheme,
    toggleTheme
}
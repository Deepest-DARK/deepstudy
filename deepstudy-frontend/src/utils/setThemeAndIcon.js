function setToggleThemeInLocalStorage() {
    const currentTheme = localStorage.getItem('theme') || 'light'
    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light')
}

function setIcon() {
    const currentTheme = localStorage.getItem('theme') || 'light'
    if (currentTheme === 'light') {
        document.getElementById('sun-icon').style.display = 'none'
        document.getElementById('moon-icon').style.display = 'inline'
    } else {
        document.getElementById('moon-icon').style.display = 'none'
        document.getElementById('sun-icon').style.display = 'inline'
    }
}

export {
    setToggleThemeInLocalStorage,
    setIcon
}
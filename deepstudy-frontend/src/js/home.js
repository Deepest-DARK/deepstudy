import { applyTheme } from "../utils/globalVariables.js";

applyTheme()

fetch('./components/nav-bar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html
        setIcon()
    })
    .catch(error => {
        console.error('Failed to load navbar : ', error)

    })

fetch('./components/content.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html
    })
    .catch(error => {
        console.error('Failed to load content : ', error);

    })



function toggleTheme() {
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

// current theme icon
// The DOMContentLoaded Doesn’t work for dynamically loaded content (like the fetch case).
const currentTheme = localStorage.getItem('theme') || 'light'
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.theme')) {
            toggleTheme()
            setIcon()
            applyTheme()
        }
    })
})
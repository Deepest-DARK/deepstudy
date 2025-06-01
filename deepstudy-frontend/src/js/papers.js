import { setIcon } from "../utils/setThemeAndIcon.js"
import { applyTheme, toggleTheme } from "../utils/theme.js"

applyTheme()

fetch('../../components/nav-bar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html
        setIcon()
    })
    .catch(error => {
        console.error('Failed to load navbar : ', error)
    })

fetch('../../components/filter.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('filter').innerHTML = html
    })
    .catch(error => {
        console.error('Failed to load filter : ', error);
    })


// The DOMContentLoaded Doesn’t work for dynamically loaded content (like the fetch case).
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.theme')) {
            toggleTheme()
        }
    })
})

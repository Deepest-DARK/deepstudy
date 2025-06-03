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
        toggleOptions()
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

function toggleOptions() {
    document.querySelectorAll('.filter').forEach((element) => {

        if (element.id !== "save") {
            element.addEventListener('mouseenter', (e) => {
                e.target.querySelector('ul').style.display = 'flex';
            })
            element.addEventListener('mouseleave', (e) => {
                e.target.querySelector('ul').style.display = 'none';
            })
        }
    })

}
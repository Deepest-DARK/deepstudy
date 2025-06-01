import { applyTheme } from "../utils/theme.js"

applyTheme()

function toggleEye() {
    document.getElementById('eye-closed').addEventListener('click', (e) => {
        document.getElementById('eye-open').style.display = 'inline-block'
        document.getElementById('eye-closed').style.display = 'none'
        document.getElementById('password').type = 'text'
    })

    document.getElementById('eye-open').addEventListener('click', (e) => {
        document.getElementById('eye-open').style.display = 'none'
        document.getElementById('eye-closed').style.display = 'inline-block'
        document.getElementById('password').type = 'password'
    })
}

document.addEventListener('DOMContentLoaded', () => {
    toggleEye()
})

document.getElementById('left-arrow').addEventListener('click',()=>{
    window.location.href = '/deepstudy-frontend/src/index.html'
})
// Define theme objects
const themes = {
  light: {
    '--primary-color': '#ffffff',
    '--secondary-color': '#d4d4d4',
    '--border-color': '#4f4f4f',
    '--background-color': '#ffffff',
    '--btn-color': '#a0a0a0',
    '--text-color': 'black',
    '--text-size': '18px',
    '--icon-color': '#000000',
    '--icon-size': '30px',
    '--font-family': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  dark: {
    '--primary-color': '#000000',
    '--secondary-color': '#d4d4d4',
    '--border-color': '#4f4f4f',
    '--background-color': '#212121',
    '--btn-color': '#a0a0a0',
    '--text-color': 'black',
    '--text-size': '18px',
    '--icon-color': '#ffffff',
    '--icon-size': '30px',
    '--font-family': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }
};


function applyTheme() {
  const theme = themes[localStorage.getItem('theme') || 'light']
  Object.keys(theme).forEach(property => {
    document.documentElement.style.setProperty(property, theme[property])
    // console.log(property," ", theme[property]);

  })
}

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

applyTheme()

// current theme icon
const currentTheme = localStorage.getItem('theme') || 'light'
document.addEventListener('navbarLoaded', () => {
setIcon()
  document.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.closest('.theme')) {
      console.log("inside the listener")
      toggleTheme()
      setIcon
      applyTheme()
    }
  })
})



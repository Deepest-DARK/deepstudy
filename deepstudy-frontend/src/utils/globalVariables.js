// Define theme objects
const themes = {
  light: {
    '--primary-color': '#e0e0e0',
    '--secondary-color': '#8a8a8a',
    '--nav-color': '#ffffff',
    '--background-color': '#ffffff',
    '--text-color': 'black',
    '--text-size': '18px',
    '--icon-color': '#000000',
    '--icon-size': '30px',
    '--font-family': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  dark: {
    '--primary-color': '#212121',
    '--secondary-color': '#4d4d4d',
    '--nav-color': '#212121',
    '--background-color': '#202124',
    '--text-color': 'white',
    '--text-size': '12px',
    '--icon-color': '#ffffff',
    '--icon-size': '30px',
    '--font-family': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }
};


export function applyTheme() {
  const theme = themes[localStorage.getItem('theme') || 'light']
  Object.keys(theme).forEach(property => {
    document.documentElement.style.setProperty(property, theme[property])
    // console.log(property," ", theme[property]);

  })
}
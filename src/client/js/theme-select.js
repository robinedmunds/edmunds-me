"use strict"


const THEMES = [
  "theme-default",
  "theme-teal-fleece",
  "theme-orange-brown"
]

const themeSelect = (name) => {
  if (THEMES.includes(name)) {
    const e = document.querySelector("html")
    e.classList = []
    e.classList.add(name)
    // console.log(`-- Theme set to: ${name}`)
  }
}

const themeNext = () => {
  const e = document.querySelector("html")
  const currentTheme = e.classList[0]
  let themeIndex = THEMES.indexOf(currentTheme)
  if (themeIndex >= THEMES.length-1) {themeIndex = 0}
  else {themeIndex++}
  themeSelect(THEMES[themeIndex])
}

themeSelect(THEMES[0])
window.setInterval(themeNext, 3000)
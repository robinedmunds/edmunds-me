"use strict"


const THEMES = [
  "theme-default",
  "theme-teal-fleece",
  "theme-orange-brown"
]

const setTheme = (newTheme) => {
  if (!THEMES.includes(newTheme)) return
  const rgxTheme = /theme-.*/
  const e = document.querySelector("html")
  const currentThemes = Array.from(e.classList).filter(theme => {
    if (rgxTheme.test(theme)) {return theme}
  })
  currentThemes.forEach(theme => e.classList.remove(theme))
  e.classList.add(newTheme)
}

const nextTheme = () => {
  const e = document.querySelector("html")
  const currentTheme = e.classList[0]
  let themeIndex = THEMES.indexOf(currentTheme)
  if (themeIndex >= THEMES.length-1) {themeIndex = 0}
  else {themeIndex++}
  setTheme(THEMES[themeIndex])
}

setTheme(THEMES[0])
window.setInterval(nextTheme, 3000)
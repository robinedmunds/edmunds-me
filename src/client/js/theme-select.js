"use strict"


const themes = [
  "theme-default",
  "theme-teal-fleece",
  "theme-orange-brown"
]

const themeSelect = (name) => {
  if (themes.includes(name)) {
    const e = document.querySelector("html")
    e.classList = []
    e.classList.add(name)
    console.log(`-- Theme set to: ${name}`)
  }
}

const themeNext = () => {
  const e = document.querySelector("html")
  const current = e.classList[0]
  let idx = themes.indexOf(current)
  if (idx < themes.length-1) {
    idx++
  } else {
    idx = 0
  }
  themeSelect(themes[idx])
}

themeSelect(themes[0])
window.setInterval(themeNext, 9000)
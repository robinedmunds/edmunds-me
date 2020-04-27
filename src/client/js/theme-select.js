"use strict"


const themeSelect = (name) => {
  const themes = [
    "theme-default",
    "theme-teal-fleece",
    "theme-orange-brown"
  ]

  if (themes.includes(name)) {
    const e = document.querySelector("html")
    e.classList = []
    e.classList.add(name)
    console.log(`-- Theme set to: ${name}`)
  }
}

themeSelect("theme-default")
// themeSelect("theme-teal-fleece")
// themeSelect("theme-orange-brown")
"use strict"

console.log("hello from html-toggle.js")

const rmElements = () => {
  let all = [
    document.querySelectorAll("article"),
    // document.querySelectorAll(".project-card"),
  ]
  let single = [
    document.querySelector(".project-card"),
    document.querySelector(".blog"),
  ]

  for (const q of all) {
    for (const e of q) {
      e.remove()
    }
  }

  for (const e of single) {
      e.remove()
    }

}

rmElements()
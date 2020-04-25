"use strict"

console.log("hello from html-toggle.js")

const rmElements = () => {
  let all = [
    document.querySelectorAll("article"),
    document.querySelectorAll(".project-card"),
  ]
  let single = [
    // document.querySelector(".project-card"),
    // document.querySelector(".blog"),
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

const eMultiplier = (parent, child) => {
  const n = 3  // 2 already defined in html
  const parentE = document.querySelector(parent)
  const first = document.querySelector(child)
  const fragment = document.createDocumentFragment()

  for (let i = 0; i < n; i++) {
    const newChild = first.cloneNode({ deep: true })
    fragment.appendChild(newChild)
  }

  parentE.appendChild(fragment)
}

rmElements()
eMultiplier(".blog-1", ".blog-article")
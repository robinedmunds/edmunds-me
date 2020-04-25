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

const eMultiplier = (parentID, childID, n=2) => {
  const parent = document.querySelector(parentID)
  const first = document.querySelector(childID)
  const fragment = document.createDocumentFragment()

  for (let i = 0; i < n; i++) {
    const newChild = first.cloneNode({ deep: true })
    fragment.appendChild(newChild)
  }

  parent.appendChild(fragment)
}

// rmElements()
// eMultiplier(".blog-1", ".blog-article", 2)
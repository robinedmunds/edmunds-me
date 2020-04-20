"strict"

console.log("hello from html-toggle.js")

const rmElements = () => {
  let a = [
    document.querySelectorAll("article"),
    document.querySelectorAll(".project-card"),
    // document.querySelectorAll(".blog")
  ]

  for (const i of a) {
    for (const i of i) {
      i.remove()
    }
  }
}

rmElements()
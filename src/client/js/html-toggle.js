"strict"

console.log("hello from html-toggle.js")

const rmElements = () => {
  let all = [
    document.querySelectorAll("article"),
    // document.querySelectorAll(".project-card"),
  ]
  let single = [
    document.querySelector(".project-card"),
    // document.querySelector(".blog"),
  ]

  for (q of all) {
    for (e of q) {
      e.remove()
    }
  }

  for (e of single) {
      e.remove()
    }

}

rmElements()
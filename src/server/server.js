"use strict"

const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => res.send("oh hai!"))

app.listen(port, () => console.log(`Server up. Listening on port, ${port}`))
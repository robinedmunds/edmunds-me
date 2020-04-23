"use strict"

const express = require("express")
const app = express()
const port = 8080
app.use(express.static("dist"))

app.listen(port, () => console.log(`Server up. Listening on port, ${port}`))

app.get("/", (req, res) => res.sendFile(__dirname))
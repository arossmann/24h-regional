const express = require("express")
const routes = require("./routes")

const app = express()
app.use("/api", routes) // new

app.listen(5000, () => {
    console.log("Server has started!")
})
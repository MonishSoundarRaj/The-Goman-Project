const express = require("express")
const path = require("path")

const app = express()

app.get("/home", (req,res) => {
    const filePath = path.join(__dirname, 'src', 'home.html')
    res.sendFile(filePath)
})

app.listen(process.env.PORT||3000, () => {
    console.log("Server has started and running")
})
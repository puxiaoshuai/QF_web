const express = require("express")
const app = express()

const home = express.Router()
app.use("/home", home)
home.get("/index", (req, res) => {
    res.send("欢迎来到博客首页")
})

app.listen(800)
console.log("启动成功");
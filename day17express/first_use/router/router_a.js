const express = require("express")
const app = express()
const admin = require("./admin.js")
const home = require("./home.js")
app.use("/admin", admin)
app.use("/home", home)
app.listen(800)
console.log("启动成功");
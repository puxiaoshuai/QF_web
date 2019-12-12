const express = require("express")

const home = express.Router()
    // 定义二级路由的名称
home.get("/index", (req, res) => {
    res.send("欢迎回家")
})
module.exports = home
//已入框架
const express = require("express")
const home = express.Router()
home.get("/", (req, res) => {
        res.send("欢迎来到首页")
    })
    // 将路由对象暴露出去
module.exports = home;
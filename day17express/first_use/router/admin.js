const express = require("express")

const admin = express.Router()
    // 定义二级路由的名称
admin.get("/index", (req, res) => {
    res.send("欢迎来到首页")
})
module.exports = admin
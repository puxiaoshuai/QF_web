//已入框架,该界面是二级路由界面，一级界面在app.js中配置
const express = require("express")
const admin = express.Router()
admin.get("/login", (req, res) => {
        //views下的admin /login文件
        res.render("admin/login")
    })
    // 将路由对象暴露出去
module.exports = admin;
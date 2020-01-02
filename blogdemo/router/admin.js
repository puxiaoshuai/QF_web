//已入框架,该界面是二级路由界面，一级界面在app.js中配置
const express = require("express")
const { User } = require("../model/user")
const admin = express.Router()
admin.get("/login", (req, res) => {
    //views下的admin /login文件
    res.render("admin/login")
})
admin.post("/login", async(req, res) => {
    // 接收请求参数
    const { email, password } = req.body
        //进行二次验证，万一客户端禁用了JavaScript
    if (email.trim().length == 0 || password.trim().length == 0)
        return res.status(400).render("admin/error", { msg: "请求参数错误啦" })
            //没查询到时null
    let user = await User.findOne({ email })
    if (user) {
        if (user.password === password) {
            //cookie 与sesion
            req.session.username = user.username
                //app对象
            req.app.locals.userInfo = user
            res.redirect("user")

        } else {
            res.send("密码或者账号错误")
        }
    } else {
        return res.status(400).render("admin/error", { msg: "未查询到该用户" })
    }

})
admin.get("/user", (req, res) => {
        res.render("admin/user")
    })
    // 将路由对象暴露出去
module.exports = admin;
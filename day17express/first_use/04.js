const express = require("express")
const app = express()
    // app.use((req, res) => {
    //     res.send("网站维护中")
    // })
app.use("/admin", (req, res, next) => {

    if (false) {
        next()
    } else {
        throw new Error("发生未知错误")
        res.send("您还没有登录")
    }

})
app.get("/admin", (req, res) => {
    res.send("登录成功")
})
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})
app.use((req, res) => {
    res.status(404)
    res.send("当前页面不存在")
})
app.listen(800)
console.log("启动成功");
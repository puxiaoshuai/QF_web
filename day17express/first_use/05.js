const express = require("express")
const app = express()
    // app.use((req, res) => {
    //     res.send("网站维护中")
    // })
app.get("/index", (req, res) => {
        throw new Error("发生未知错误")
    })
    //错误处理中间件
app.use((err, req, res, next) => {
        res.status(500).send(err.message)

    })
    // 异步的时候，在err中  使用next 传递到下一个中间件

app.listen(800)
console.log("启动成功");
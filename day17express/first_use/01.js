const express = require("express")
const app = express()
app.get("/", (req, res) => {
    console.log("成功");
    // send
    // 1.内部自动检测响应的类型
    //2send方法自动设置http状态吗
    //指定设置响应的内容类型和编码
    res.send("你好1")

})
app.get("/list", (req, res) => {
    console.log("成功");
    // send
    // 1.内部自动检测响应的类型
    //2send方法自动设置http状态吗
    //指定设置响应的内容类型和编码
    res.send({ name: "1", age: "2" })

})
app.listen(800)
console.log("启动成功");
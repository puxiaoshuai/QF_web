const express = require("express")
const app = express()
app.use((req, res, next) => {

    console.log("所有的请求都会走这里");
    //如果登录成功，交给下一个中间件
    next()

})
app.use('/data', (req, res, next) => {
    console.log("请求走了app.use中间件 /data");
    next()
})
app.get('/list', (req, res) => {
    res.end("哈哈哈")
})

app.listen(800)
console.log("启动成功");
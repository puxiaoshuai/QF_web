const express = require("express")
const app = express()
app.get('/req', (req, res, next) => {
    req.name = "张三"
        //如果没有next  就没有交给下一个中中间件，也没有send就一直在加载
    next()

})
app.get('/req', (req, res) => {
    res.send(req.name)
})
app.listen(800)
console.log("启动成功");
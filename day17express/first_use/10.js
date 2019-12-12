const express = require("express")
const bodyParser = require("body-parser")
const app = express()
    //拦截所有请求，
    //extended:false方法内部使用querystring 模块来处理的
    //extended:true 使用qs第三方处理
app.use(bodyParser.urlencoded({ extended: false }))
    // 使用postman来测试吧
app.post("/add", (req, res) => {
    res.send(req.body)
})
app.listen(800)
console.log("启动成功");
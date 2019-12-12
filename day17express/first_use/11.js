const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
    //拦截所有请求，
    //extended:false方法内部使用querystring 模块来处理的
    //extended:true 使用qs第三方处理
app.use(express.static(path.join(__dirname, "public")))

// 使用postman来测试吧

app.listen(800)
console.log("启动成功");
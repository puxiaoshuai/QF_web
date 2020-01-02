const path = require("path")
    //引入框架
const express = require('express')
const bodyParser = require("body-parser")
    // 连接数据库
require('./model/connect')
    // 引入body-parse模块进行post参数获取
const session = require("express-session")


//创建网站服务器
const app = express()
    //引入一级路由
const home = require("./router/home")
const admin = require("./router/admin")
    //处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
    //seions基本配置
app.use(session({ "secret": "secret key" }))
    //express 静态支援配置
app.engine("html", require("express-art-template"))
    //设置模板存放的目录
app.set("views", path.join(__dirname, "views"))
    //当模板不写后缀时，默认art，这里是 html文件
app.set("view engine", "html")
    //渲染模板  res.render("index")
app.use(express.static(path.join(__dirname, "public")))
app.use("/home", home)
app.use("/admin", admin)
    //监听端口
app.listen(3000)
console.log("服务启动成功");
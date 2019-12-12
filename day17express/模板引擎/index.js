const express = require("express")
const path = require('path')
const app = express()
    //当选人后缀为art的模板时，使用express-art-template
app.engine("html", require("express-art-template"))
    //设置模板存放的目录,第一个views是固定的

// 公共数据
app.locals.users = [{
    name: "浦小山"
}, { name: "占多数" }]
app.set("views", path.join(__dirname, "views"))
    //当模板不写后缀时，默认art
app.set("view engine", "html")
    //渲染模板  res.render("index")
app.get("/index", (req, res) => {
    res.render("index", {
        sex_name: "蒲小帅"
    })
})
app.listen(800)
console.log("启动成功");
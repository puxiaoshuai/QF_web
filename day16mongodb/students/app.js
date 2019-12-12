//入口文件
const http = require("http")
    //导入数据库的连接
require("./models/connact")
const date_format = require("dateformat")
const serverStatic = require("serve-static")
    // 导入model对象
    //路由
const router1 = require("./router/index")
const app = http.createServer();
//模板
const template = require("art-template")
template.defaults.imports.dataformat = date_format
const path = require("path")
const serve = serverStatic(path.join(__dirname, "public"))
template.defaults.root = path.join(__dirname, "views")
    // template.defaults.extname = ".html"

app.on("request", (req, res) => {
    // res.writeHead(200, {
    //     //"content-type": "text/plain"  文本类型
    //     "content-type": "text/html;charset=utf8" //html格式,解决乱码
    // });
    router1(req, res, () => {

    })
    serve(req, res, () => {

    })
})
app.listen("3000")
console.log("服务器启动成功");
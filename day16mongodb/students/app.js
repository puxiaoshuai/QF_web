const http = require("http")
const getRouter = require("router")
    //导入数据库的连接
require("./models/connact")
    // 导入model对象
const Student = require("./models/user")
    //路由
const router1 = getRouter()
const app = http.createServer();
//模板
const template = require("art-template")
const path = require("path")
template.defaults.root = path.join(__dirname, "views")
const serverStatic = require("serve-static")

const serve = serverStatic(path.join(__dirname, "public"))
router1.get("/list", (req, res) => {
    let html = template("list.art", {})
    res.end(html)
})
router1.get("/add", (req, res) => {
    res.end("添加")
})
app.on("request", (req, res) => {
    res.writeHead(200, {
        //"content-type": "text/plain"  文本类型
        "content-type": "text/html;charset=utf8" //html格式,解决乱码
    });
    router1(req, res, () => {

    })
    serve(req, res, () => {

    })
})
app.listen("80")
console.log("服务器启动成功");
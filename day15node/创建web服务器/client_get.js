const http = require("http")
    // 内置模块，url解析
const url = require("url")
const app = http.createServer()
app.on("request", (req, res) => {
    //req.method  获取是什么请求方式
    let { query, pathname } = url.parse(req.url, true) //解构出来

    console.log(query.name) //查询参数解析成对象

    res.writeHead(200, {
        //"content-type": "text/plain"  文本类型
        "content-type": "text/html;charset=utf8" //html格式,解决乱码
    });
    if (pathname == "/index" || pathname == "/") {
        res.end("欢迎您： " + query.name)

    } else if (pathname == "/list") {
        res.end("<h1>welcom to ListPage1</h1>")
    } else {
        res.end("not found")
    }
})
app.listen(3000)
console.log("服务器启动成功1");
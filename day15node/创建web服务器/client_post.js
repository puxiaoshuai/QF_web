const http = require("http")
    // 内置模块，url解析
const url = require("url")
const querystring = require("querystring")
const app = http.createServer()
app.on("request", (req, res) => {
    //req.method  获取是什么请求方式
    //post 参数是通过事件的方式接受的
    //data 当请求参数传递的时候发出data事件
    //end  当参数传递完成是发出end事件
    let postparms = ""
    req.on("data", parms => {
        postparms += parms
    })
    req.on("end", () => {
        let data = querystring.parse(postparms)
        console.log(data);
        // res.writeHead(200, {
        //     //"content-type": "text/plain"  文本类型
        //     "content-type": "text/html;charset=utf8" //html格式,解决乱码
        // });
        //指定文本类型，低版本会有问题，高版本不存在
    })
    res.end("ok")


})
app.listen(3000)
console.log("服务器启动成功1");
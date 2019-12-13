const Koa = require("koa")
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const static = require('koa-static')
    //路由
const Router = require('koa-router');
const router = new Router()
const views = require('koa-views')
const path = require('path')
    //全局设置路由第一级
    // const router = new Router({
    //     prefix: "/home"
    // })
app.use(views(path.join(__dirname, "views"), {
    extension: "ejs"
}))
console.log("地址", path.join(__dirname, "public"));

app.use(static(
    path.join(__dirname, "public")
))
app.use(bodyParser());
// app.use(async(res) => {
//         let url = res.url
//         let request = res.request
//             //request中获取
//             // let req_query = request.query
//             // let req_quertstring = request.querystring;
//             //这是从上下文中获取
//         let req_query = res.query
//         let req_quertstring = request.querystring;
//         res.body = {
//             url,
//             req_query,
//             req_quertstring
//         }
//     })
//     // res.request.body获取post参数
router.get("/", async(req) => {
    let title = "蒲小帅"
    await req.render("index", {
        title
    })
})

//创建单个路由，使用总路由地址use加载，并设置1级路由home
let todo = new Router()
todo.get("/todo", (req, next) => {
        req.body = { name: '蒲小帅' }
    })
    //装载所有子路由  home/todo来访问
router.use('/home', todo.routes(), todo.allowedMethods())
    //加载路由中间键位
app.use(router.routes()).use(router.allowedMethods()).listen(3000, () => {
    console.log("服务启动成功");
})
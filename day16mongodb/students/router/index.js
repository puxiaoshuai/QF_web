const getRouter = require("router")
const querystring = require("querystring")

const template = require("art-template")

const Student = require("../models/user")
const router1 = getRouter()
    //加载list页面
router1.get("/list", async(req, res) => {
        // 进行查询操作
        let students = await Student.find()

        let html = template("list.html", { students: students })
        res.end(html)

    })
    //加载首页添加页面
router1.get("/index", (req, res) => {
    let html = template("index.html", {})
    res.end(html)

})
router1.post("/del", (req, res) => {
    console.log("进入");

    let formData = ""
    req.on('data', res => {
        formData += res;
    })
    req.on("end", async() => {
        let id = formData.split("=")[1]
        let result = await Student.findByIdAndDelete(id)
        console.log(result);

        // if (result == null) {
        //     res.status(300).send("失败")
        // } else {
        //     res.status(200).send("成功")
        // }
        res.end()

    })
})

// post请求的获取
router1.post("/index", (req, res) => {
    let formData = ""
    req.on('data', res => {
        formData += res;
    })
    req.on("end", async() => {

        await Student.create(querystring.parse(formData))
            //    重新定向
        res.writeHead(301, {
            location: "/list"
        })
        res.end()
    })
})
module.exports = router1
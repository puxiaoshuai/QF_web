//连接数据库
const mongodb = require("mongoose")
mongodb.connect("mongodb://localhost/students", { useUnifiedTopology: true })
    .then(res => console.log("数据库连接成功"))
    .catch(err => console.log("数据库连接失败"))
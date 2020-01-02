//创建用户集合
const mongoose = require("mongoose")
    // 创建集合规则

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20
        },
        email: {
            type: String,
            unique: true, //保证邮箱唯一
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        //0 表示激活状态，1表示冻结
        state: {
            type: String,
            default: 0
        }

    })
    //创建集合
const User = mongoose.model("User", userSchema)
    // User.create({
    //     username: "admin",
    //     email: "1372553910@qq.com",
    //     password: "123456",
    //     role: 'admin',
    //     state: 0
    // }).then(() => {
    //     console.log("用户创建成功");
    // }).catch(() => console.log("用户创建失败"));

module.exports = {
    User: User
}
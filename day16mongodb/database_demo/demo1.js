const mgdb = require("mongoose")
    // 虽然连接成功，但是不会马上创建数据库，需要写入类容才能进行创建数据库
mgdb.connect("mongodb://localhost/shcool", { useUnifiedTopology: true })
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch(() => {
        console.log("数据库连接失败");
    })
    //创建集合规则 ，不如你要创建一个学校的数据库，学校下有班级的表
    //定义班级的规则,新增字段很方便
const sourseSchema = new mgdb.Schema({
        name: String, //班级名
        teacher: String, //老师
        // isActive: Boolean, //是否开班
        age: {
            type: Number,
            required: [true, "请传入age"],
            min: 16, //最大最小长度
            max: 100,

        },
        openDate: {
            type: Date,
            // 默认值
            default: Date.now
        }

    })
    //使用规则创建集合，就是创建表
const Class_Name = mgdb.model("Class", sourseSchema)
    //创建文档，就是创建 每一条数据
let classa = new Class_Name({
        name: "三年级2班",
        teacher: "蒲小帅",
        isActive: true
    })
    //创建了文档
    // classa.save()
    //     //另外一种创建文档的操作
Class_Name.create({ name: "五年级2班", teacher: "冬瓜1", age: "20", isActive: false }, (err, doc) => {
        console.log(err);
        console.log(doc);
    })
    //查询
    // Class_Name.find().then((res) => {
    //     console.log(res);

// })
//查询指定,返回的是数组
// Class_Name.find({ "_id": '5df09adcfc5f462458d69884' }).then((res) => {
//     console.log(res);

// })
//findOne查询指定,返回的是对象
// Class_Name.findOne({ "_id": '5df09adcfc5f462458d69883' }).then((res) => {
//     console.log(res);

// })
//查询年级大于 gt 20, lt 小于50 的人
//查询条条件  {'age':{$gt:20,$lt:50}}
// 匹配包含  {hobbise:{$in:["足球"]}爱好包含 足球的数据
// 选择要查询的字段 find().select("name ") 返回的数组只有 name字段，其他的被隐藏了
// 根据年龄升序排序age     -age就是降序
// 排序 find.sort("age")
// skip() 跳过几条， limit 限制数量  分页用到
// Class_Name.find().skip(1).limit(1).then(res => {
//     console.log(res);

// })

// 删除 findByIdAndDelete查找到文档删除 ，删除某条或者数组的第一条 ，返回值就是当前删除的文档
//删除多条 deleteMany({})  删除所有文档 ，返回值就是{n:1,ok:1} n就是删除了几条

//更新文档 updateOne,更新一个
// Class_Name.updateOne({ "name": "三年级2班" }, { "name": "更新的班" }).then(res => {
//     console.log(res);

// })
//更新多个 updateMany

// mangodb  验证  
//required  true  必传字段
//defult 默认值
//emum:["html" ,"java"]枚举值，只能传这几个值
// emnm:{
//     valuse:["a","b"],
//     message:"分类没在范围类"
// }
// name: {
//     type: String,
//     required: [true, "请传入name"],
//     minlength: 100, //最大最小长度
//     maxlength: 200,
//     trim: true, //去除空格
// },
// age: {
//     type: Number,
//     required: [true, "请传入name"],
//     min: 100, //最大最小长度
//     max: 200,

// },
// 自定义验证
// validate:{
//     validator:v=>{
//        return  v&&v.length>4
//     },
//     message:"传的值不符合规则"
// }


//集合关联  就是表的关联 比如文章的author  关联  用户表
//1使用id关联   2.使用post.find(). populate（"author"）进行当前文章下用户的查询
//第一步规则构造的时候  author:{type:mongoose.Schema.Types.ObjectId,ref:"User"} 进行关联
//第二步 使用 post.find(). populate（"author"）进行查询
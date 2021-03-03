const mongoose=require("mongoose")
let userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    password:String,
    email:String,
})
module.exports=mongoose.model('User',userSchema)
const mongoose = require("mongoose")
    //创建学生表
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },

    sex: {
        type: String
    },
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
})
const Student = mongoose.model("Student", studentSchema)
module.exports = Student
//实现接口
var customer = {
    fname: "蒲",
    lname: "小时",
    sayHi: function () {
        return "你好哈";
    }
};
console.log(customer.fname);
var phone = {
    go: "我是手机"
};
var computer = {
    go: ["1", "B"]
};
var CDB = {
    go: function () {
        return "我是充电宝";
    }
};
console.log(phone.go);
console.log(computer.go);
var a = CDB.go;
console.log(a());

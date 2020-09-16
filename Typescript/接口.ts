//定义接口
interface IPersom{
    fname:string,
    lname:string,
    sayHi:()=>{
    }
}
//实现接口
var customer:IPersom={
    fname:"蒲",
    lname:"小时",
    sayHi:():string=>{
        return "你好哈"
    }
}
console.log(customer.fname);
//联合型接口,
//go可以是sting,数组，函数式类型
interface USB{
    go:string[]|string |(()=>string);
}
var phone:USB={
    go:"我是手机"
}
var computer:USB={
    go:["1","B"]
}
var CDB:USB={
    go:()=>{
        return "我是充电宝"
    }
}
console.log(phone.go);
console.log(computer.go);
var a:any=CDB.go;
console.log(a());




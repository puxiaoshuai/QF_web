let count:number=1
count=11
console.log(count);
// 基础静态类型 string,number,bool等
let uname : string="蒲小帅"

//对象类型
let person:{
    uname:string,
    age:number
}={
    uname:"普下方",
    age:12
}
console.log(person.uname);
//对象数组类型
let pseron1:string[]=['劳动',"fds"]
console.log(pseron1[1]);
// 对象类类型
class Person2{
    name:string
}
let person2:Person2=new Person2()
person2.name="我是类类型"
console.log(person2.name);
// 对象函数类型
let xiaojiejie:()=>string=()=>{
    return "谢大脚"
}
console.log(xiaojiejie());




let jianli=(name:string,age:number,bust:number)=>{
    age<24&&bust>=90&&console.log("恭喜");
    age>24&&bust<90&&console.log("遗憾");
}
let jianli_info=(name:string,age:number,bust:number)=>{
    console.log(name+":年龄"+age+"分数"+bust);
    
}
jianli("蜂花粉",21,100)
jianli_info("蜂花粉",21,100)
// 上面的类型注解是一样的。
interface Girl{
    name:string,
    age:number,
    bust:number,
    xiong?:number ,//非必须实现
    [propnane:string]:any,//任意值
}
let jianli1=(p:Girl)=>{
    p.age<24&&p.bust>=90&&console.log("恭喜");
    p.age>24&&p.bust<90&&console.log("遗憾");
}
let jianli_info1=(p:Girl)=>{
    console.log(p.name+":年龄"+p.age+"分数"+p.bust);
    console.log(p.sex);
    
    
}
let girl={
    name:"fdsf",
    age:23,
    bust:95,
    sex:"他是个男的"


}
jianli_info1(girl)
// 接口和type差不多，但是接口必须是代表一个对象。type可以是string等类型
//  ？可选填
// [propnane:string]:any,//任意值

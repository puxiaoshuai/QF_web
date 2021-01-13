// 1.参数注解
// 2.类型推导
// 3可选参数
// ?就是可选参数
function add(x:number,y?:number){
    console.log("y",y);
    return x+y
}
console.log(add(10));
function sayhi():void{
    console.log("你好，我没返回值");
    
}
sayhi()

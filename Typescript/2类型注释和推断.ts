// type  annotation 类型注解
// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
let pname="fdjskfj" //鼠标移动上去就能推断出是字符串
//不用给注解 one:string ,就能显示出来
// let one=1;
// let tow=2;
// let three=one+tow
// console.log(three);
//推断是any所以最好给注解
function addAll(x:number,y:number){
    return x+y
}
let a=addAll(1,3)
console.log(a);


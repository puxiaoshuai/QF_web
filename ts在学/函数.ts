
function show(name:string):number{
    console.log("name==",name);
    return 213
}
let fn=show("小帅")
console.log(fn);

//匿名函数

// let show=function (name:string):string{
//     console.log("name is ",name);
//     return "我是返回值"
    
// }
// show("哈哈哈哈哈")

// 可选参数,必选放到参数的最后面
// function show(name:string,age?:number){
//     if(age){
//         console.log("name is"+name+",age is"+age);
//     }else{
//         console.log("name is"+name);
//     } 
// }
// show("蒲小帅")

// //默认参数
// function show(name:string="蒲小帅"){
//      console.log("测试",name);
     
// }
// show()

//剩余参数  ...result
// function show(age:number,b:number,c:number){
//        return age+b+c
// }
// function show(...result:number[]){
//     let sum=0
//     result.forEach(element => {
//          sum+=element
//      });
//      return sum
// }
// console.log(show(2,3,10));

// 函数的重载, 在 any中进行数据判断
// function show(name:string):string;
// function show(name:number):string;
// function show(str:any):any{
//     if(typeof str ==='string'){
//         console.log("我是str函数");
//         return  "我是"+str; 
//     }else{
//         console.log("我是number函数");
//         return "age is"+str
//     }
// }
// show("重写武汉东湖")
// show(1111)


// 箭头函数





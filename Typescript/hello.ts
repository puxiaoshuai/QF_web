var message:string ="helloword"
console.log(message);
class Site{
    namex():void{
        console.log("蒲小帅");
    }
}
let obj=new Site();
obj.namex()
//字符串
let name:string="我是字符串"
console.log(name);
let name1:number="我是数字"
console.log(name1);
let name2:boolean=false
console.log(name2);
let name3:number[]=[2,1]
console.log(name3);
let name4:[string,number]=["哈哈",11]
console.log(name4);
//枚举
enum Color {Red,Green}
let c:Color=Color.Green
console.log(c);
//任意值
let x:any[]=[1,"哈"]
console.log(x)


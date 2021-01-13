class Dog11{
    constructor(readonly name:string,private _age:number){

    }
    get age(){
          return this._age
    }
    set setage(age:number){
      this._age=age
    }
    static sayHi(){
        console.log("你好我是小体拳");

    }
}
let dog11=new Dog11("小腿",11)
console.log(dog11);
//readonly就是只读属性
abstract class  Girl{
    abstract skill()
}
class  Waiter extends  Girl{
    skill() {
        console.log("你好，我是服务员")
    }
}
class Teacher extends  Girl{
    skill() {
        console.log("我会教书")
    }
}



console.log("类");
class Person{
    name:string;
    age:number;
    constructor(name:string){
          this.name=name
          this.age=12
    }
    run(){
        console.log(this.name+"在奔跑");
        
    }
    // 静态方法，不能直接使用类属性，能访问static静态属性
     getName():string{
        return this.name
    }
    static say(){
        
        console.log("我是静态方法");   
    }
}
let p=new Person("蒲小帅")
console.log(p.name+p.age);
p.run()
Person.say()
// 继承

class Teacher extends Person{
    constructor(name:string) {
        super(name)
    }
    work(){
        console.log("我是老师，在工作");
    }

}
let t=new Teacher("蒲老师")
t.work()
t.run()

// 多态  父类方法具体不实现，由子类去进行继承，由不一样的表现，就是多态

//抽象 用abstact关键字定义抽象类和抽象方法，在派生内中进行实现
//让子类必须实现eat方法
 abstract class   Animal{
       abstract eat():any; //派生类必须实现这个抽象方法
}
class Cat extends Animal{
       eat(){
           console.log("我是猫哈哈哈哈");
           
       }
}

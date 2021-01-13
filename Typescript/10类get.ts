// 类的getter,setter,static
// getter,获取私有属性
class Dog10{
    constructor(private _age:number){
       
    }
    get age(){
        return this._age
    }
    set setage(age:number){
        this._age=age
    }
    static sayW(){
        console.log("汪汪");
        
    }

}
let dog10=new Dog10(23)
dog10.setage=21
console.log(dog10.age);
// static用static声明的属性和方法，不需要进行声明对象
Dog10.sayW()




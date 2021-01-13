// public  公共的
//privite 只允许再类的内部被调用，外部不允许调用
// project   在类和子类中进行使用
class Dog{
    public name:string;
    private age:number;
    protected sex="男"
    public sayW(){
        console.log("汪汪");
        return "汪汪"
    }
}
let dog=new Dog()
dog.name="藏獒"
console.log(dog);

dog.sayW()
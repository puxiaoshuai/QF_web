class Dog9{
    public name:string;
    constructor(name:string){
        this.name=name
    }

}
let dog9=new Dog9("哮天犬")
console.log(dog9.name);
//更简单的写法
class Dog91{
    
    constructor(public name:string){
      
    }

}
let dog91=new Dog91("汉堡")
console.log(dog91.name);
class BigDog extends Dog91{
    constructor(public age:number){
        super("我是父类")
    }
}
let bigdog=new BigDog(12)
console.log(bigdog.age);



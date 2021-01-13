class Lady {
    content="你好，帅哥";
    sayHello(){
        return this.content
    }
}
let lady=new Lady()
console.log(lady.sayHello());
class Xiaojiejie extends Lady{
    saylove(){
        return "我爱你"
    }
    //方法重写
    // sayHello(){
    //     return "从新类容"
    // }
    sayHello(){
        return super.sayHello()+"我是小美女"
    }
}
let xiao =new Xiaojiejie()
console.log(xiao.saylove());
console.log(xiao.sayHello());



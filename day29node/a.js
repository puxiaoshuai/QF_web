var a="哈哈哈"
console.log("a.js");

function foo(){
  console.log("我是a中的函数");
}
//module.exports.num=a;
module.exports={
  num:a,
  foo
}

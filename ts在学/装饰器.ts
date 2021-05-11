// 1.类装饰器

function Sayhi(target: Function): void {
  target.prototype.hi1 = function () {
    console.log("你好");
  };
}
@Sayhi
class Hi {
  constructor() {}
}
let person_hi = new Hi();
console.log(person_hi);

person_hi.hi1();

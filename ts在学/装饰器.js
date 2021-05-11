// 1.类装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Sayhi(target) {
    target.prototype.hi1 = function () {
        console.log("你好");
    };
}
var Hi = /** @class */ (function () {
    function Hi() {
    }
    Hi = __decorate([
        Sayhi
    ], Hi);
    return Hi;
}());
var person_hi = new Hi();
console.log(person_hi);
person_hi.hi1();

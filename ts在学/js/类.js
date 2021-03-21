"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("类");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 12;
    }
    Person.prototype.run = function () {
        console.log(this.name + "在奔跑");
    };
    // 静态方法，不能直接使用类属性，能访问static静态属性
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.say = function () {
        console.log("我是静态方法");
    };
    return Person;
}());
var p = new Person("蒲小帅");
console.log(p.name + p.age);
p.run();
Person.say();
// 继承
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        return _super.call(this, name) || this;
    }
    Teacher.prototype.work = function () {
        console.log("我是老师，在工作");
    };
    return Teacher;
}(Person));
var t = new Teacher("蒲老师");
t.work();
t.run();
// 多态  父类方法具体不实现，由子类去进行继承，由不一样的表现，就是多态
//抽象 用abstact关键字定义抽象类和抽象方法，在派生内中进行实现
//让子类必须实现eat方法
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log("我是猫哈哈哈哈");
    };
    return Cat;
}(Animal));

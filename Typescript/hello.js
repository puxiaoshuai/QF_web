var message = "helloword";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.namex = function () {
        console.log("蒲小帅");
    };
    return Site;
}());
var obj = new Site();
obj.namex();
//字符串
var name = "我是字符串";
console.log(name);
var name1 = "我是数字";
console.log(name1);
var name2 = false;
console.log(name2);
var name3 = [2, 1];
console.log(name3);
var name4 = ["哈哈", 11];
console.log(name4);
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//任意值
var x = [1, "哈"];
console.log(x);
//nerver类型
//类型断言？
//联合类型
// 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。

// 注意：只能赋值指定的类型，如果赋值其它类型就会报错。

// 创建联合类型的语法格式如下：

// Type1|Type2|Type3 
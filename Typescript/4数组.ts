let numberarr = [1, 2, "1"]

//数组里面放对象
let xiaojiejie1: { name: string, age: number }[] = [
    { name: "附近的时刻", age: 12 }
]
//上面的形式看起来比较麻烦，我们起个别名，
type person = { name: string, age: number }
let xiaojiejie2: person[] = [{ name: "附近的时刻", age: 12 }]
console.log(xiaojiejie2[0]);

// 也可以用类来进行限制
class Person3  { name: string; age: number }
let xiaojiejie3:Person3[]=[
    { name: "111", age: 12 }
]
console.log(xiaojiejie3[0]);

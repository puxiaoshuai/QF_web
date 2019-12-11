//1普通函数加了 async 就成了异步函数
//2异步函数默认返回的是 promise对象
// function fn() {
//     //默认返回undefid
// }
// async function fn1() {
//     return "蒲小帅"
// }
// console.log(fn());
// console.log(fn1());
// fn1().then((data) => {
//     console.log(data);

// })
//===================
async function readTxt1() {
    return "读取第1个文件"
}
async function readTxt2() {
    return "读取第2个文件"
}
async function readTxt3() {
    return "读取第3个文件"
}
async function run() {
    let res1 = await readTxt1()
        //执行完了在执行下面的函数
    let res2 = await readTxt2()
    let res3 = await readTxt3()
    console.log(res1);
    console.log(res2);
    console.log(res3);

}
run()
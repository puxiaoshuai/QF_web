// // let a=6000.80930930912039012
// // let b=[1999.123456789,2000.876543211]
// // console.log(b.reduce((pre,curr)=>pre+curr,0));
// // console.log(a-b.reduce((pre,curr)=>pre+curr,0));
// let a=[100,200,300]
// console.log(a[-1]);
// if(2000 < a[-1]){
//   console.log("哈哈");
// }else{
//   console.log("xx");
// }
// console.log(200 - undefined);
// if(NaN){
//   console.log("和开发商");
// }else{
//  console.log("测试 ");
// }
function swapArray(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  console.log("arr.sp",arr.splice(index2, 1, arr[index1]));
   return arr;
}
let A=[1,2,3,4]
console.log(swapArray[A,1,2]);
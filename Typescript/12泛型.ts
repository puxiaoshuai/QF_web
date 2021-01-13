let myarr:number[]=[1,2,3,4]
let fuirte:(string|  number)[]=["11",12]
function reverse<T>(arr:T[]){
    const _arr:T[]=[];
    for(let i=arr.length-1; i >= 0;i--){
       _arr.push(arr[i])
    }
    return _arr
}

console.log(reverse(myarr))
console.log(reverse(fuirte))
//进阶
// class  SelectGirl{
//     constructor(private girls:string[]) {
//     }
//     getGirl(index:number){
//         return this.girls[index]
//     }
// }
// let girl=new SelectGirl(["美女王","张小姐","李小姐"])
// console.log(girl.getGirl(1))
//为了保护他们的隐私，
interface Girl{
    name:string
}
class  SelectGirl<T extends Girl>{
    constructor(private girls:T[]) {
    }
    getGirl(index:number) : string{
        return this.girls[index].name;
    }
}
let girl=new SelectGirl([{name:"美女王"},{name:"li小姐"}])
console.log(girl.getGirl(1))
//新增需求，每个对象要有name
// interface Girl{
//     name:string
// }
//泛型的约束

//T extends number|string


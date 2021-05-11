import React from 'react';
export interface Props{
    name:string,
    num?:number
}
// function Hello({name,num=1}:Props){
//     if(num <=0){
//         throw new Error("参数错误")
//     }
//     return (
//         <div>
//             <span>你好</span>
//             {name+":::"+num}
//         </div>
//     )
// }
const Hello:React.FC<Props>=({name,num})=>{
     
    return  <div>
            <span>你好</span>
            {name+"=========》"+num}
        </div>
}
export default Hello
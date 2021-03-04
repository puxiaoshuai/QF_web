//https://gank.io/api/v2/banners

import React, { useState ,useEffect,createContext} from 'react'
import axios from 'axios'

function Example(param) {
    // 数组解构  ,addCount  名字随便取的
    //多状态声明
    const [data,setData]=useState([])
    //useState不能存在if中
    //一个函数代表了componentDidMount，componentDidUpdate两个生命周期
    useEffect(() => {
        axios.get("https://gank.io/api/v2/banners").then(res=>{
            console.log(res.data.data);
            setData(res.data.data)
            
        })
        return ()=>{
          
        }
    },[])
    
    return (
        <div>
           <ul>
               {
                    data.map((item,index)=>{
                    return <div key={index}>
                         <li>
                             <img src={item.image} style={{width:30,height:30}}/>
                         </li>
                         <li>{item.title}</li>
                    </div>
                    })
               }
           </ul>
        </div>
    )
}
export default Example




import React,{useState,useContext} from 'react'
import {CountContent} from './hooks_content'
function Son(){
    const [name,setname]=useState("晓东1")
    const count=useContext(CountContent)
    return (
        <div>
            <p>我是{name}，父组件传值:{count}</p>
        </div>
    )
}
export default Son
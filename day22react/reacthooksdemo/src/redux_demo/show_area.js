import React, { useContext } from 'react'
//展示区域获取到了内容共享的颜色 并设置在div上
import {ColorContent} from './colors'
export default function ShowArea(){
    //获取共享的颜色
    const {color} =useContext(ColorContent)
    return (

        <div style={{color:color}}>
           字体颜色为蓝色
        </div>
    )
}

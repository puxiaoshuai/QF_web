import React, { useState, useContext } from 'react'
import {ColorContent,UPDATE_COLOR} from './colors'
//点击事件的文件中，通过
export default function Buttons(){
    const {dispatch} =useContext(ColorContent)
    return (
        <div>
            <button  onClick={()=>{
                dispatch({type:UPDATE_COLOR,color:"blue"})
            }}>蓝色</button>
            <button  onClick={()=>{
                dispatch({type:UPDATE_COLOR,color:"red"})
            }}>红色</button>
        </div>
    )
}

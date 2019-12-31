//这是一种懒加载包，那么next提供了dynamic进行自定义懒加载
import React, { useState } from 'react'
// import moment from 'moment'
import dynamic  from 'next/dynamic'
const PageB=dynamic(import('../components/buttons'))
function time(){
    const [nowTime,setTime]=useState(Date.now())
    const changTime= async ()=>{
        const moment =await import("moment")
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
        <div>
            显示时间为{nowTime}
            <button onClick={changTime}>改变时间格式</button>
            <PageB>哈哈</PageB>
        </div>
        </>
    )
}
export default time

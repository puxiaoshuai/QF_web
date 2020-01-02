import React,{useState} from 'react'

import HelloWorld from '../components/hello'
import ButtonMine from '../components/buttons'
import Link from 'next/link'
import Router from 'next/router'
// 成功导入
import '../public/test.css'
import { Button } from 'antd'
const Home = () => {
  function goB(){
   //Router.push("/pagea?name=周大生")
   Router.push({
     pathname:"/pagea",
     query:{
       name:"哈哈哈，高大上"
     }
   })
  }
   const [color,setColor] =useState("blue")
   const changColor=()=>{
     setColor(color=="blue"?"red":'blue')
   }
  // Router.events.on('routeChangeStart',(...args)=>{
  //   console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  // })

  // Router.events.on('routeChangeComplete',(...args)=>{
  //   console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
  // })

  // Router.events.on('beforeHistoryChange',(...args)=>{
  //   console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
  // })

  // Router.events.on('routeChangeError',(...args)=>{
  //   console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
  // })

  // Router.events.on('hashChangeStart',(...args)=>{
  //   console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
  // })

  // Router.events.on('hashChangeComplete',(...args)=>{
  //   console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
  // })
  return (<>
      <HelloWorld />
     
      <ButtonMine>点我,点我</ButtonMine>
      <h3>路由跳转</h3>
      <Button type="danger">antd</Button>
      <hr />
      <div>
        <Link href="/pagea?name=蒲小帅"><a>去蒲小帅的A界面</a></Link>
        <br />
        <Link href="/pageb"><a>去蒲小帅的B界面</a></Link>
        <button onClick={goB}>去界面2</button>
        <div>
          <button onClick={changColor}>改变颜色</button>
          
          <div   className="box"></div>
        </div>
      </div>
      
      <style jsx>
          {
            `
            .box{
              background-color:${color};
              width:200px;
              height:200px;
            }
            `
          }
      </style>
    </>
  )
 
  }
 

export default Home

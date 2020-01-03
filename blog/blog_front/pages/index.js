import React, { useState } from 'react'
import Head from 'next/head'
import { Button, Row, Col, List, Icon } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import servicePath from '../config/apiUrl'
//markdown
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
const Home = (list) => {
  const [mylist,setMyList]=useState(
    list.data
  )
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  }); 
  return (
    <div>
      <Head>
        <title>Home</title>

      </Head>
      <Header></Header>
      {/* 居中 */}
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
          <List
          header={<div>最新日志</div>}
          itemLayout="vertical"
          dataSource={mylist}
          renderItem={
            item=>{
              return (
                <List.Item>
                  <div className="list-title">
                  <Link href={{pathname:'/details',query:{id:item.id}}}>
                     <a>
                     {item.title}
                     </a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span><Icon type="calendar"/> {item.addTime}</span>
                    <span><Icon type="folder"/> {item.typeName}</span>
                    <span><Icon type="fire"/>{item.view_count}</span>
                  </div>
                  <div className="list-content"
                   dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                   
                  />
                    
                
                </List.Item>
              )
            }
          }
          >

          </List>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert url={"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4aa0cbfad7de34618c4bebdbdeee4e1.jpg?w=2452&h=920"}></Advert>
          <Advert url={"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e45bcdea59448cd82360662a331409fc.jpg?thumb=1&w=1226&h=460&f=webp&q=90"}></Advert>
          <Advert url={"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc7c5cc595e12203796678eedd9c4250.jpg?thumb=1&w=1226&h=460&f=webp&q=90"}></Advert>
        </Col>
      </Row>
      <Footer></Footer>
    </div>


  )
}
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home

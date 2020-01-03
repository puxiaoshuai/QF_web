import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import { Button, Row, Col, List, Icon,Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/list.css'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import Link from 'next/link'
const MyList = (list_data) => {
  const [mylist,setMyList]=useState(
    list_data.data
  )
  useEffect(()=>{
    setMyList(list_data.data)
  })
  return (
    <div>
      <Head>
        <title>Home</title>

      </Head>
      <Header></Header>
      <div className="bread-div">
        <Breadcrumb>
        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
        <Breadcrumb.Item>视频列表</Breadcrumb.Item>
        </Breadcrumb>
      </div>
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
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar"/> {item.addTime}</span>
                    <span><Icon type="folder"/> {item.typeName}</span>
                    <span><Icon type="fire"/> {item.introduce}</span>
                  </div>
                  <div className="list-content">
                      {item.context}
                  </div>
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
MyList.getInitialProps = async (context)=>{

  let id =context.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById+id).then(
      (res)=>resolve(res.data)
    )
  })
  return await promise
}

export default MyList

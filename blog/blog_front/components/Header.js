import React, { useState, useEffect } from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navarray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.results)
                    return res.data.results
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])
    const handleClick = (e) => {
        if(e.key==0){
            // pages的文件件，为路由的路径
            Router.push('/index')
        }else{
            // 这是路由跳转
            Router.push('/list?id='+e.key)
        }
    }
    return <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                
                    <span className="header-logo">
                        蒲小帅
            </span>
                
                <span className="header-txt">
                    蒲小帅的博客
            </span></Col>
            <Col className="menu=div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    {
                        navarray.map((item) => {
                            
                            return(
                            <Menu.Item onClick={handleClick} key={item.id}>
                                <Icon type={item.icon}></Icon>
                                {item.typeName}
                           </Menu.Item>)
                        })
                    }

                </Menu>
            </Col>
        </Row>
    </div>
}
export default Header
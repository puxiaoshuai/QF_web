import React from 'react'
import {Row, Button, Col} from 'antd'
import  './index.less'
import Util from '../../utils/utils'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sysTime:""
        }
        setInterval(()=>{
            let sysTime=Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }

    render() {
        return <div className="header">
           <Row className="header-top">
               <Col span="24">
                   <span>欢迎,河畔一觉</span>
                   <a href="#">退出</a>
               </Col>
           </Row>
           <Row className="breadcumb">
               <Col className="breadcumb-title" span="4">
                   首页
               </Col>
               <Col className="weather" span="20">
    <span className="weather-time">{this.state.sysTime}</span>
                   <span className="weather-tag">晴转多云</span>
               </Col>
           </Row>
        </div>
    }
}
import React from 'react'
import {Row, Col} from 'antd'
import './admin.less'
import './styles/common.less'
import  Footer  from './components/footer/index'
import  Header   from './components/header/index'
import  Nav  from './components/nav/index'
import  Home  from './pages/home/index'
export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            <Row className="container">
                <Col span={3} className="nav-left">
                    <Nav/>
                </Col>
                <Col span={21} className="main">
                    <Header/>
                    <Row className="content" style={{position:"relative"}}>
                      {this.props.children}
                    </Row>
                    <Footer className="footer"/>
                </Col>
            </Row>

        </div>
    }
}
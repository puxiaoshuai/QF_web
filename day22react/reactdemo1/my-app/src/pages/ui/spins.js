import React, { Component } from 'react'
import { Card,Spin,Alert, Icon } from 'antd'

export default class Spins extends Component {
    render() {
        return (
            <div>
                <Card title="基本用法" >
                   <Spin></Spin>
                </Card>
                <Card title="自定义描述文案" >
                   <Spin tip="加载中">
                  <Alert message="温馨提示"
                  description="昨天睡丢了一只小狗"
                  type="error">

                  </Alert>
                   </Spin>
                </Card>
                <Card title="自定义图标" >

                   <Spin indicator={<Icon type="loading" style={{fontSize:24}}></Icon>}></Spin>
                </Card>
            </div>
        )
    }
}

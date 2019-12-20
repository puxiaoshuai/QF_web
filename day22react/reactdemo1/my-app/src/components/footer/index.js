import React from 'react'
import {Row, Button} from 'antd'
import '../footer/index.less'
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className="footer">
            版权所有:欢迎来到小帅管理系统，

        </div>
    }
}
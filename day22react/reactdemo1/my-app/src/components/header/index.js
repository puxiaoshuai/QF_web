import React from 'react'
import {Row, Button} from 'antd'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            我是头部
            <Button type={"primary"}>点击</Button>

        </div>
    }
}
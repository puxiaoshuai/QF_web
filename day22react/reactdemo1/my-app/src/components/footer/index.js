import React from 'react'
import {Row, Button} from 'antd'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            我是底部
            <Button type={"primary"}>点击</Button>

        </div>
    }
}
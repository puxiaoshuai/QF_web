import React, { Component } from 'react'
import './base.less'
import { Button,Icon } from 'antd';
export default class Life extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <div>
            <p> React生命周期介绍11</p> <button onClick = { this.add } > 点击 </button> <p> { this.state.count } </p> 
            <Button type="primary">Button</Button>
            <Icon type="backward" />
            </div>
           
    }
}
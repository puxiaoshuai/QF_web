


import React, { Component } from 'react'

export default class Life extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    add=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return <div>
            <p>React生命周期介绍</p>
             <button onClick={this.add}>点击</button>
             <p>{this.state.count}</p>
        </div>
    }
}
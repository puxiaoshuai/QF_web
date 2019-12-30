//这是类的写法
import React, { Component } from 'react'

export default class example extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.add=this.add.bind(this)
    }
    
    componentDidMount(){
        console.log('componentDidMount=>', this.state.count );
        
    }
    componentDidUpdate(){
        console.log('componentDidUpdate=>', this.state.count );
    }

    render() {
        return (
            <div>
                <h3>点击我数值:{this.state.count}</h3>
                <button  onClick={this.add}>加一</button>
            </div>
        )
    }
    add(){
      this.setState({
          count:++this.state.count
      })
    }
}

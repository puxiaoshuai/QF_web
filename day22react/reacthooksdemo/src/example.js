//这是类的写法
import React, { Component } from 'react'

export default class example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            data:1,
        }
        this.add=this.add.bind(this)
    }
    
    componentDidMount(){
        console.log('componentDidMount=>', this.state.count );
        this.setState({
             data:this.state.data+1
        },()=>{
            console.log("测试 ",this.state.data);
        })
        console.log(this.state.data);
        
        
    }
    componentDidUpdate(){
        console.log('componentDidUpdate=>', this.state.count );
    }

    render() {
        return (
            <div>
                <h3>点击我数值:{this.state.count}</h3>
                <button  onClick={this.add}>加一</button>
                <Son></Son>
            </div>
        )
    }
    add(){
      this.setState({
          count:++this.state.count
      })
    }
}
 class Son extends Component {
    constructor(props){
        super(props)
    }
    render(){
       console.log("");
       
        let c=this.props.count
        return(<div>
            <p>父类</p>
        <p>{c}</p>
        </div>)
    }
}
import React, { Component } from 'react'

export default class ListPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:""
      };
    };
    
    componentDidMount(){
       this.setState({
           name:this.props.match.params.name
       })
        
    }
    render() {
        return (
            <div>
                <p>我是列表页,值：{this.state.name}</p>
            </div>
        )
    }
}

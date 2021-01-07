import React, { Component } from 'react'
// 定义一个函数返回  传入一个组件，返回新的组件就会高阶组件
//一些组件有公用的操作，就可以提取出来封装成高阶组件
 class ReactHightOrder extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <p>加载</p>
            </div>
        )
    }
}
export default Hoc(ReactHightOrder)
export function Hoc(Comp){
    return class  extends React.Component{
        componentWillMount(){
            this.start=Date.now()
        }
        componentDidMount(){
            console.log("耗时",(Date.now()-this.start)+"毫秒");
            
        }
        render(){
            return <Comp {...this.props}/>
        }
    }
}

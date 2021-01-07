import React, { Component } from 'react'
// 生命周期
export default class LifeCicle extends Component {
    static defaultProps = {
        name: "计数器"
    }
    constructor(porps) {
        super(porps)
        console.log("父类初始化");
        
        this.state = {
            num: 0,
        }
    }
    componentWillMount(){
        console.log("父类componentWillMount");
        
    }
    shouldComponentUpdate(){
        return true
    }
    // 一般在 componentDidMount进行异步操作
    componentDidMount(){
        console.log("父类componentDidMount");
        
    }
    componentWillUpdate(){
        console.log("父类将要componentWillUpdate");
        
    }
    //代替componentWillUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("新版本父类将要更新getSnapshotBeforeUpdate",prevProps);
        console.log("新版本父类将要更新getSnapshotBeforeUpdate",prevState);
        //retrun的值
        return "哈哈哈"
    }
    componentDidUpdate(prevProps, prevState,info){
        //哈哈哈在这里接收，
        console.log("父类更新完成componentDidUpdate",prevProps);
        console.log("父类更新完成componentDidUpdate",prevState);
        console.log("父类更新完成componentDidUpdate",info);
    }
  
    render() {
        console.log("父类render");
        
        return (
            <div>
                <h1>生命周期</h1>
                <h2>{this.props.name}{this.state.num}</h2>
                <button onClick={() => {
                    this.setState({
                        num: this.state.num + 1
                    })
                }}>点击</button>
                <p>info{this.state.info}</p>
                <Son num={this.state.num} />
            </div>
        )
    }
}
class Son extends Component {
    constructor(props) {
        super(props)
    }
    //有了getDerivedStateFromProps，下面的失效
    componentWillReceiveProps(nextProps, prevState){
        console.log("子类接收componentWillReceiveProps",nextProps);  
    }
    //代替componentWillReceiveProps()。
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("子类新的接收-上次的数据Props",nextProps);
        console.log("子类新的接收-新的数据State",prevState);
        //进行数据处理
        if(nextProps.num===5){
            return {date:"新年快乐"}
        }else{
            return {date:new Date().getTime()}
        }
        
    }
    render() {
         console.log("子类render");
         
        return <div>
            <h2>{this.props.num}</h2>
            <h2>{this.state.date}</h2>
        </div>
    }
}



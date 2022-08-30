import React, { Component } from 'react'

//组件
class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props?.type || "没有获取到值啦"
    }
  }
  render() {
    return (
      <div>你好，{this.state.data}</div>
    )
  }
}
//无状态函数组件
function StateLessHOC(WrapperComponents) {
  const newProps = { type: "蒲小帅" }
  return props => <WrapperComponents {...props} {...newProps} />
}
// export default StateLessHOC(Hello)
//有状态的class组件
function StateHOC(WrapperComponents) {
  return class extends React.Component {
      render(){
        const newProps ={type:"蒲小帅哈哈哈哈"}
        return <WrapperComponents {...newProps} {...this.props}/>
      }
  }
}
export default StateHOC(Hello)

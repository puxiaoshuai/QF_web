import React, { Component } from 'react'
/**
 *Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性
 *  
 * @export
 * @class react_content
 * @extends {Component}
 */

//  创建上下文容器并导出
export const { Provider, Consumer } = React.createContext("默认名")
export default class React_content extends Component {
    render() {
        let name = "蒲小帅"
        return (
            <Provider value={name}>
                <div>
                    <h1>react-content上下文</h1>
        <h3>父组件定义的值:{name}</h3>
                    <Son />
                </div>

            </Provider>
        )
    }
}
class Son extends Component {
    //注意  （name）=>不能用{}
    render() {
        return <Consumer>
            {
                (name)=>
                <div>
                    <p>我是第二层</p>
                        <p>子组件获取{name}</p>
                         <GrandSon />
                         
                     </div>
            }
        </Consumer>
    }
}
class GrandSon extends Component {
    render() {
        return <Consumer>
            {
                (name)=>
                    <div>
                     
                   <p>我是第三层</p>
                   <p>孙子组件获取{name}</p>
                  </div>
                
            }
        </Consumer>
    }
}
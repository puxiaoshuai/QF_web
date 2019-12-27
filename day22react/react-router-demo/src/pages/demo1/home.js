import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                { "cid": 1, title: "技术博客1" },
                { "cid": 2, title: "技术博客2" },
                { "cid": 3, title: "技术博客3" },
                { "cid": 4, title: "技术博客4" },
            ]
        }
        // 编程式导航
        this.props.history.push("/list/啊哈哈")
    }

    render() {
        return (
            <div>
                
                <h3>博客列表</h3>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (<li key={index}>
                               <Link to={'/list/'+item.title}> <h4>{item.title}</h4></Link>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

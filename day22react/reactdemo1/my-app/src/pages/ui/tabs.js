import React, { Component } from 'react'
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom'
import { Tabs ,} from 'antd'
const { TabPane } = Tabs;


export default class TabsDemo extends Component {
    render() {
        return (
            <div>
                 <Tabs>
                     <TabPane tab="标签1" key="1">
                         我是第一个
                     </TabPane>
                     <TabPane tab="便签2" key="2">
                         我是第2个
                     </TabPane>
                     <TabPane tab="便签31" key="3">
                         我是第3个
                     </TabPane>
                 </Tabs>
            </div>
        )
    }
}

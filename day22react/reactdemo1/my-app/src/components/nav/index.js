import React from 'react'
import { Row, Checkbox } from 'antd'
import './index.less'
import { Menu, Icon } from 'antd';
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom'
import menuList from '../../menuList'
const { SubMenu } = Menu;

export default class Nav extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props) {
        super(props)
        this.state = {
            openKeys: ['sub1'],
        }
    }
    componentWillMount = () => {
        const menuTreeNode = this.renderMenu(menuList)
        console.log(menuTreeNode);
        
        this.setState({
            menuTreeNode
        })

    }
    renderMenu = (data) => {
        console.log(data);
        // 
        return data.map((items) => {
            if (items.childreen) {
                // 如果有孩纸的话，先展示第一级SubMenu,包含二级内容，再次返回此方法，形成递归
                return (
                    <SubMenu title={<span>
                        <Icon type="mail" />
                        <span>{items.title}</span>
                    </span>} key={items.key}>
                        {this.renderMenu(items.childreen)}
                    </SubMenu>
                )
            }
            // return <SubMenu title={items.title} key={items.key} >{items.title}</SubMenu>
            // Submenu会有右侧箭头的,Menu.Item没有箭头表示唯一一级
        return <Menu.Item title={items.title} key={items.key} ><Link to={items.key}>{items.title}</Link></Menu.Item>
        })

    }

    // onOpenChange = openKeys => {
    //     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    //     if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         this.setState({ openKeys });
    //     } else {
    //         this.setState({
    //             openKeys: latestOpenKey ? [latestOpenKey] : [],
    //         });
    //     }
    // };

    render() {
        return <div className="navleft">
            <div className="logo">
                {/* 直接从public目录加载 */}
                <img src="/images/logo.jpg" alt="" />
                <h1>管理后台</h1>
            </div>
            <Menu theme="dark" mode="vertical">
                {this.state.menuTreeNode}
                {/*
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <Icon type="setting" />
                            <span>Navigation Three</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu> */}
            </Menu>

        </div>
    }
}
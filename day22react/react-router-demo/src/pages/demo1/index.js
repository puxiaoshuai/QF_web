import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './home'
import ListPage from './list'
// function index() {
//     return <h2>我是首页</h2>
// }
// function List() {
//     return <h2>我是列表页</h2>
// }
function AppRouter() {
    return (
        <Router>
            {/* <ul>
                <li><Link  to="/home/">我是首页</Link></li>
                <li><Link to="/list/蒲小帅">列表页</Link></li>
            </ul> */}
            {/* 首页一般精确匹配 */}
            <Route  exact path="/home/" component={Home}  />
            <Route path="/list/:name" component={ListPage}  />
            <Route  path="/home1/" component={Home}  />
        </Router>
    )
}
export default AppRouter

import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../../index.css'
import HomePage from './homepage'
import VedioPage from './video_router'
import WorkPage from './work_router'
function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to={"/"}>博客首页</Link></li>
                        {/* 默认进入第一个react教程 */}
                        <li><Link to={"/video/reactpage/"}>视频教程</Link></li>
                        <li><Link to={"/work/page1"}>职场技能</Link></li>
                    </ul>
                </div>
                <div className="rightNav">
                    <Route path="/" exact component={HomePage}></Route>
                    {/* 不要精确匹配 */}
                    <Route path="/video"  component={VedioPage}></Route>
                    <Route path="/work"  component={WorkPage}></Route>
                </div>
            </div>
        </Router>
    )
}
export default AppRouter

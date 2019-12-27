import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Page1 from './workpalce/page1'
import Page2 from './workpalce/page2'
import Page3 from './workpalce/page3'
export default function workpalce(){
    return (<div>
        <div className="topNav">
            <ul>
                <li>
                    <Link to="/work/page1">工作计划</Link>

                </li>
                <li>  <Link to="/work/page2">工作任务</Link></li>
                <li>   <Link to="/work/page3">工作形式</Link></li>
            </ul>
        </div>
        <div className="videoComtent">
           
            <Route path="/work/page1/" component={Page1} />
            <Route path="/work/page2/" component={Page2} />
            <Route path="/work/page3/" component={Page3} />

        </div>
    </div>)
}
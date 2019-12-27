import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import FluterPage from './video/Flutter'
import VuePage from './video/Vue'
import '../../index.css'
export default function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/video/reactpage">React教程</Link>

                    </li>
                    <li>  <Link to="/video/vuepage">vue教程</Link></li>
                    <li>   <Link to="/video/flutterpage">flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoComtent">
               
                <Route path="/video/reactpage/" component={ReactPage} />
                <Route path="/video/vuepage/" component={VuePage} />
                <Route path="/video/flutterpage/" component={FluterPage} />

            </div>
        </div>
    )
}
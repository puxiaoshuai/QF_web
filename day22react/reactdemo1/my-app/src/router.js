import {BrowserRouter as Router ,Link,Route} from 'react-router-dom'
import React, { Component } from 'react'
import AppPage from './app'
import AdminPage from './admin'
import { Button } from 'antd'
import Buttons from './pages/ui/buttons/buttons'
import Page404 from './pages/nomatch/index'
import ModalDemo from './pages/ui/modals'
import Spins from './pages/ui/spins'
import Tabs from './pages/ui/tabs'
export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <AppPage>
                    {/* render 返回子路由，不用{}包裹 */}
                    <Route path='/admin'  render={()=>
                    <AdminPage>
                           <Route path="/admin/ui/buttons" component={Buttons}></Route>
                           <Route path="/admin/ui/modals" component={ModalDemo}></Route>
                           <Route path="/admin/ui/spin" component={Spins}></Route>
                           <Route path="/admin/ui/tabs" component={Tabs}></Route>
                           <Route  component={Page404}></Route>
                    </AdminPage>
                    }/>
                </AppPage>
            </Router>
        )
    }
}

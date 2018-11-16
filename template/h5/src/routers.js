import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import DelayLoading from './components/DelayLoading'




// 按需加载路由
const Home = Loadable({loader: () => import('./pages/home'), loading : DelayLoading,delay:3000})
const List = Loadable({loader: () => import('./pages/list'), loading : DelayLoading,delay:3000})
const NoFound = Loadable({loader: () => import('./pages/404'), loading : DelayLoading,delay:3000})



@withRouter
class Routers extends Component {
  constructor(props) {
    super(props)
  }

 
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/list" component={List} />
        <Route component={NoFound} />
      </Switch>
    )
  }
}

export default Routers
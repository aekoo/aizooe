import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import BasicLayout from './layouts/BasicLayout'

import User from './pages/user'
import Home from './pages/home'

@withRouter
class Routers extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/" component={BasicLayout}/>
      </Switch>
    )
  }
}

export default Routers
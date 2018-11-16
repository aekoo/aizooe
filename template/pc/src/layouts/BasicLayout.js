
import React from 'react'
import { Button, List } from 'antd-mobile'
import { Route, withRouter, Switch } from 'react-router-dom'
import Header from '@/components/Header'
import routerConfig from '../common/routes'
import NoMatch from '../pages/404'

@withRouter
export default class Basic extends React.Component{

  componentDidMount(){
  }
  
  goHome = () => {
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <Header title="Yay! Welcome to ~~!" home={this.goHome} />
        <div className={styles.routeWrap}>
        <Switch>
          {routerConfig.map((item,i)=>
            <Route key={i} path={item.path} component={item.component} exact/>
          )}
          <Route component={NoMatch} />
        </Switch>
        </div>
      </div>
    )
  }
}
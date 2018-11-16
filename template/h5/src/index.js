import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routers from './routers'
import FastClick from 'fastclick'
import './assets/css/normalize.less'

FastClick.attach(document.body);
class App extends React.Component {
  render() {
      return (
          <HashRouter>
              <Routers />
          </HashRouter>
      )
  }
}
render(<App/>, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}

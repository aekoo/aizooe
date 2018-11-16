import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routers from './routers'
import './assets/css/normalize.less'

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

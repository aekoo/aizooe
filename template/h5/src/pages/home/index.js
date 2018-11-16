import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Toast } from 'antd-mobile'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount(){
    Toast.info('test', 2, null, false)
  }
  goList = () => {
    this.props.history.push({
      pathname: '/list',
      search: ''
    })
  }
  render() {
    return (
      <div style={{marginTop: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png"
            style={{height: '2.4rem', width: '2.4rem'}}
          />
        </div>
        
        <Button onClick={this.goList}>go to list </Button>
        <Link to={'/list'}></Link>
      </div>
    )
  }
}

export default Home
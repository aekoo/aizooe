
import React from 'react'
import styles from './index.less'

export default class Home extends React.Component{
  constructor(props){
    super(props)

  }

  goDetail = () => {
    this.props.history.push('/detail')

  }
  render(){
    return (
      <div>
        <div className={styles.welcome} onClick={this.goDetail}/>ddd
      </div>
    )
  }
}
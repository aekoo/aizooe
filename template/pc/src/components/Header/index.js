
import React from 'react'
import styles from './index.less'

export default class Header extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div className={styles.header} onClick = {this.props.home}>
        {this.props.title}
      </div>
    )
  }
}
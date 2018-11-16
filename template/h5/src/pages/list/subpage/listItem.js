import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
import styles from '../index.less'

class Listitem extends Component {
  constructor(props) {
    super(props)
    
  }
  
  goHome = () => {
    this.props.history.push({
      pathname: '/home',
      search: ''
    })
  }

  itemDom(data){
    return (
      <div className={styles.list_item}>
        <img src={data.cprologo} />
        <span>{data.camountrange || '2万'}</span>
      </div>
    )
  }
  render() {
    let { data } = this.props;
    return (
      <>
      {
        this.itemDom(data)
      }
      </>
    )
  }
}

export default Listitem

import React from 'react'

import { Calendar } from 'antd';

export default class Detail extends React.Component{
  constructor(props){
    super(props)

  }

  onPanelChange = () => {
    this.props.history.push('/afasdfasf')
  }
  render(){
    return (
      <Calendar onPanelChange={this.onPanelChange} />
    )
  }
}
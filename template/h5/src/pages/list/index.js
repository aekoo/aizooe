import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { get, post } from '../../common/fetch'
import Listitem from './subpage/listItem'

@withRouter
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: {}
    }
  }
  componentDidMount(){
    this.fetchList();
  }

  fetchList = async () => {
    let res = await get('/notcontrol/loan/channelList2.go?orderBy=all&icitycode=310100&iorgid=huishuaka&cclient=&cposition=loan')
    let { code, data, desc } = res;
    if(code !== '1')return Toast.info(desc)
    this.setState({list: data})
  }
  goHome = () => {
    this.props.history.push({
      pathname: '/home',
      search: ''
    })
  }
  goHomeUrl({curl}){
    location.href=curl
  }
  render() {
    let { list } = this.state;
    return (
      <div>
        <Button onClick={this.goHome}>go to home, 404 </Button>

        {
          (list.ihotorder || []).map((v, i)=>(
            <div onClick={this.goHomeUrl.bind(this, v)} key={i}><Listitem data={v} /></div>
          ))
        }
        
      </div>
    )
  }
}

export default List

import React from 'react'
import { Card, Button } from 'antd';
import styles from './index.less'
const { Meta } = Card;

export default class User extends React.Component{
  constructor(props){
    super(props)

  }

  goHome = () => {
    this.props.history.push('/')
  }
  render(){
    return (
      <>
      <div className={styles.user}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
        
        
      </div>
      <Button type="primary" block onClick={this.goHome}>go home</Button>
      </>
    )
  }
}


import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Divider, Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['极速贷款', '公积金贷款', '信用卡贷款', '大额专属'];

export default class ConfigInfo extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <>
        <Divider orientation="left">列表</Divider>
        <Row gutter={24} style={{ background: '#EFF1F5', padding: '20px 0' }}>
          <Col span={8}>
            <Card title="默认配置">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置1">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置1">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ background: '#EFF1F5', padding: '20px 0' }}>
          <Col span={8}>
            <Card title="默认配置">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置1">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置1">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
            </Card>
          </Col>
        </Row>
        <Divider orientation="left">普通运营位</Divider>
        <Row gutter={24} style={{ background: '#EFF1F5', padding: '20px 0' }}>
          <Col span={8}>
            <Checkbox>极速贷款</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>极速贷款</Checkbox>
          </Col>
        </Row>
      </>
    )
  }
}
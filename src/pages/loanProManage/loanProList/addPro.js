import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Input, Button, Checkbox, Avatar, Divider } from 'antd';

const InputGroup = Input.Group;

@Form.create()
export default class AddPro extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  close = () => {
    this.props.editProDrawerDisplay(false)
  }
  save = () => {
    this.close()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="贷款名称">
                {getFieldDecorator('name')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="额度范围">
                {getFieldDecorator('url')(
                  <InputGroup compact>
                    <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
                    <Input style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="~" disabled />
                    <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
                  </InputGroup>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="期限范围">
                {getFieldDecorator('owner')(
                  <InputGroup compact>
                    <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
                    <Input style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="~" disabled />
                    <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
                  </InputGroup>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="logo">
                {getFieldDecorator('type')(
                  <Avatar shape="square" size={64} icon="user" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="利率范围">
                {getFieldDecorator('owner')(
                  <InputGroup compact>
                    <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
                    <Input style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="~" disabled />
                    <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
                  </InputGroup>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="利率说明">
                {getFieldDecorator('description')(
                  <Input.TextArea rows={3} placeholder="please enter url description" />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="产品说明">
                {getFieldDecorator('description')(
                  <Input.TextArea rows={3} placeholder="please enter url description" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="申请条件">
                {getFieldDecorator('description')(
                  <Input.TextArea rows={3} placeholder="please enter url description" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="申请流程">
                {getFieldDecorator('description')(
                  <Input.TextArea rows={3} placeholder="please enter url description" />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="公司名">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="客服电话">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="认证材料">
                {getFieldDecorator('approver')(
                  <Checkbox>个人基础信息</Checkbox>
                )}
              </Form.Item>
            </Col>
          </Row>


          <Divider orientation="left">运营位配置</Divider>

          <Row gutter={24} style={{ background: '#EFF1F5', paddingTop: '20px' }}>
            <Col span={8}>
              <Form.Item label="列表展示标签">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="贷款人数">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="贷款成功率">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="列表展示标签">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="卡片详情">
                {getFieldDecorator('approver')(
                  <Input placeholder="please enter user name" />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e8e8e8',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >
          <Button onClick={this.save} style={{ marginRight: 8, }} type="primary" >保存</Button>
          <Button onClick={this.close} >关闭</Button>
        </div>
      </>
    )
  }
}
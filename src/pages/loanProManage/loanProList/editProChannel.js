import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Input, Button, Divider, Checkbox } from 'antd';

const InputGroup = Input.Group;

@Form.create()
export default class EditProChannel extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  close = () => {
    this.props.editChannelDrawerDisplay(false)
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
              <Form.Item label="默认H5跳转">
                {getFieldDecorator('defaultHref')(
                  <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left">普通渠道</Divider>
          <Row gutter={24} style={{ background: '#EFF1F5' }}>
            <Col span={24}><Checkbox style={{ margin: '16px 0' }}>全选</Checkbox></Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>点滴贷</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>发薪钱包</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>公积金</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>光大随心贷</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>慧刷卡</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>有鱼金融</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>有鱼买房</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>有鱼信用</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left">特殊渠道</Divider>
          <Row gutter={24} style={{ background: '#EFF1F5' }}>
            <Col span={24}><Checkbox style={{ margin: '16px 0' }}>全选</Checkbox></Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【百度】惠刷卡APP</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【百度】信用卡H5</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【百度】信用卡web</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【彩票H5推广】点滴贷</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【彩票】点滴贷APP</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【短信H5推广】点滴贷</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【广点通】点滴贷app</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【头条】惠刷卡APP</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>【微信】惠刷卡APP</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>惠刷卡快应用</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>随心贷商户A</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                {getFieldDecorator('defaultHref')(
                  <>
                    <Checkbox style={{ margin: '16px 0' }}>随心贷商户B</Checkbox>
                    <Input.TextArea rows={3} placeholder="请输入跳转链接" />
                  </>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
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
          <Button onClick={this.save} style={{ marginRight: 8, }} type="primary">保存</Button>
          <Button onClick={this.close} >关闭</Button>
        </div>
      </>
    )
  }
}
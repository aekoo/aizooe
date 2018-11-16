import styles from './index.less';
import React, { Component, Fragment } from 'react';
import PageHeader from '../../../components/PageHeader'
import { Row, Col, Card, Button, Table, Divider, Modal, Form, Select, Input } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

@Form.create()
export default class ChannelList extends Component {
  state = {
    addModalDisplay: false,
  }
  componentDidMount() {
    console.log(this.props);
  }

  //显示隐藏新建窗口
  changeAddModalDisplay = (flag) => {
    this.setState({ addModalDisplay: flag })
  }
  //保存
  addModalOk = () => {
    
    this.changeAddModalDisplay(false)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { addModalDisplay } = this.state;
    
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }

    const columns = [{
      title: '映射编号',
      dataIndex: 'proId',
      key: 'proId',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '产品线',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '普通/特殊渠道',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '对应配置',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作人',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '最后操作时间',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: '操作',
      render: (text, record) => (
        <span>
          <a href="javascript:;">编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">上下架</a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York',
      tags: ['nice', 'developer'],
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London',
      tags: ['loser'],
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney',
      tags: ['cool', 'teacher'],
    }];

    return (
      <>
        <PageHeader></PageHeader>
        <div className={styles.pageContent}>
          <Card>
            <div className={styles.action}>
              <Button type="primary" icon="plus" onClick={() => this.changeAddModalDisplay(true)} >新建</Button>
            </div>

            <div className="display">
              <Table columns={columns} dataSource={data} />
            </div>
          </Card>
        </div>


        <Modal
          title="新建渠道配置"
          visible={addModalDisplay}
          okText="保存"
          cancelText="关闭"
          onOk={this.addModalOk}
          onCancel={() => this.changeAddModalDisplay(false)}
        >
          <Form
            className="ant-advanced-search-form"
            onSubmit={this.handleSearch}
          >
            <Row gutter={24}>
              <Col span={20} offset={2}>
                <FormItem {...formItemLayout} label="产品线">
                  {getFieldDecorator("proStatus")(
                    <Select defaultValue={"lucy"} onChange={this.selProStChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20} offset={2}>
                <FormItem {...formItemLayout} label="渠道">
                  {getFieldDecorator("proStatus")(
                    <Select defaultValue={"lucy"} onChange={this.selProStChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20} offset={2}>
                <FormItem {...formItemLayout} label="对应配置">
                  {getFieldDecorator("proStatus")(
                    <Select defaultValue={"lucy"} onChange={this.selProStChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20} offset={2}>
                <FormItem {...formItemLayout} label="备注">
                  {getFieldDecorator("proStatus")(
                    <Input.TextArea rows={3} placeholder="Please enter remarks" />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
      </>
    )
  }
}
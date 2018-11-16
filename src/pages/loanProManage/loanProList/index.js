import styles from './index.less';
import AddPro from './addPro';
import EditProChannel from './editProChannel';
import ConfigInfo from './configInfo';
import React, { Component, Fragment } from 'react';
import PageHeader from '../../../components/PageHeader'
import { Card, Form, Row, Col, Input, Button, Select, Table, Divider, Badge, Drawer, Modal } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

@Form.create()
export default class LoanProList extends Component {
  state = {
    proDrawerDisplay: false,
    channelDrawerTitle: "渠道配置",
    channelDrawerDisplay: false,
    configModalTitle: "配置情况",
    configModalDisplay: false,
  };
  componentDidMount() {

  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('收到的表格form值: ', values);
    });
  }
  //搜索区
  //选择产品状态
  selProStChange = (value) => {
    console.log(`selected ${value}`);
  }
  //新建
  editProDrawerDisplay = (flag) => {
    if (!flag) {
      //刷新列表
    }
    this.setState({ proDrawerDisplay: flag });
  };

  //渠道配置
  editChannelDrawerDisplay = (flag) => {
    this.setState({ channelDrawerDisplay: flag });
  };

  //配置情况
  editConfigModalDisplay = (falg) => {
    this.setState({ configModalDisplay: falg });
  }
  configModalOk = () => {

    this.configModalCancel();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { proDrawerDisplay, channelDrawerTitle, channelDrawerDisplay, configModalTitle, configModalDisplay } = this.state;


    const columns = [{
      title: '产品编号',
      dataIndex: 'proId',
      key: 'proId',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '产品类型',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '产品期数类型',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '金额',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '期限',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '产品状态',
      dataIndex: 'address',
      key: 'address',
      render: text => <Badge status="success" text={text} />
    }, {
      title: '操作人',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作时间',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: '操作',
      render: (text, record) => (
        <span>
          <a href="javascript:;">查看</a>
          <Divider type="vertical" />
          <a href="javascript:;">编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={() => { this.setState({ channelDrawerTitle: record.name + "渠道配置" }); this.editChannelDrawerDisplay(true) }}>渠道配置</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={() => { this.setState({ configModalTitle: record.name + "配置情况" }); this.editConfigModalDisplay(true) }}>配置情况</a>
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
          <Card bordered={false}>
            <Form
              className="ant-advanced-search-form"
              onSubmit={this.handleSearch}
            >
              <Row gutter={24}>
                <Col span={6}>
                  <FormItem label="产品ID">
                    {getFieldDecorator("proId", {
                      // rules: [{ required: true, message: 'Input something!' }],
                    })(
                      <Input placeholder="请输入" />
                    )}
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="产品名称">
                    {getFieldDecorator("proName")(
                      <Input placeholder="请输入" />
                    )}
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="产品状态">
                    {getFieldDecorator("proStatus")(
                      <Select defaultValue="lucy" onChange={this.selProStChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <Button type="primary" htmlType="submit">查询</Button>
                  <Button style={{ marginLeft: 8 }}>重置</Button>
                </Col>
              </Row>
            </Form>

            <div className={styles.action}>
              <Button type="primary" icon="plus" onClick={() => this.editProDrawerDisplay(true)}>新建</Button>
            </div>

            <div className="display">
              <Table columns={columns} dataSource={data} />
            </div>
          </Card>
        </div>


        <Drawer
          title="新建贷款"
          width="60%"
          placement="right"
          closable={false}
          onClose={() => this.editProDrawerDisplay(false)}
          maskClosable={false}
          visible={proDrawerDisplay}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <AddPro editProDrawerDisplay={this.editProDrawerDisplay} />
        </Drawer>

        <Drawer
          title={channelDrawerTitle}
          width="60%"
          placement="right"
          closable={false}
          onClose={() => this.editChannelDrawerDisplay(false)}
          maskClosable={false}
          visible={channelDrawerDisplay}
        >
          <EditProChannel editChannelDrawerDisplay={this.editChannelDrawerDisplay} />
        </Drawer>

        <Modal
          title={configModalTitle}
          visible={configModalDisplay}
          width="720px"
          okText="保存"
          cancelText="关闭"
          onOk={this.configModalOk}
          onCancel={() => this.editConfigModalDisplay(false)}
        >
          <ConfigInfo />
        </Modal>
      </>
    )
  }
}
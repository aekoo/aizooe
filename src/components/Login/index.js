import React, { Component } from 'react'; // 引入了React
import styles from  './index.less';
import configBase from '../../config';
import { connect } from 'dva';
import { Spin, Form, Input, Button, message } from 'antd';
const FormItem = Form.Item;
@Form.create()
/* 以类的方式创建一个组件 */
@connect(({ login }) => ({
  login,
}))
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordDirty: false,
      loginBtnText: '登录'
    };
  }
  componentDidMount() {
    // 初始化数据
  }
  handleSubmit = (e) => { // 登录
    e.preventDefault();
    const { form,dispatch } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let username = values.username, // 用户名
          password = values.password, // 密码
          loginParams = { // 登录参数
            username: username,
            password: password
          };
          dispatch({
            type: 'login/login',
            payload: loginParams
          });
        console.log(loginParams);
      }
    });
  }
  render() {
    const {  form } = this.props;
    const getFieldDecorator = form.getFieldDecorator;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
            <div className={styles.loginLogo}>
              <img src={configBase.logo} />
              {configBase.projectName}
            </div>
            <Form onSubmit={this.handleSubmit}>
              <FormItem hasFeedback>
                {getFieldDecorator('username', { initialValue: 'admin', rules: [{ required: true, message: '请输入用户名' }] })(
                  <Input size="large" placeholder="用户名" maxLength="6" />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('password', { rules: [{ required: true, message: '请输入密码' }] })(
                  <Input size="large" type="password" placeholder="密码" maxLength="6" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" size="large" >登录</Button>
              </FormItem>
              <div className={styles.loginAccount}>
                <span>账号：admin</span>
                <span>密码：123456</span>
              </div>
            </Form>
        </div>
      </div>
    );
  }
}

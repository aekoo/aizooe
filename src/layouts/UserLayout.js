import React, { Component, Fragment } from 'react';
import {
  Icon
} from 'antd';
import { Link, Redirect, Switch, Route } from 'dva/router';
import GlobalFooter from '../components/GlobalFooter';
import { projectName } from '../config';
import styles from'./UserLayout.less'
import { getRoutes, getPageQuery, getQueryPath } from '../utils/utils';
function getLoginPathWithRedirectPath() {
  const params = getPageQuery();
  const { redirect } = params;
  console.log('getLoginPathWithRedirectPath', redirect)
  return getQueryPath('/user/login', {
    redirect,
  });
}
export default class BasicLayout extends Component {

  render() {
    const { routerData, match } = this.props;
    return (
      <div className={styles.loginContainer}>
        <Switch>
          {getRoutes(match.path, routerData).map(item => (
            <Route
              key={item.key}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))}
          <Redirect from="/user" to={getLoginPathWithRedirectPath()} />
        </Switch>
        <GlobalFooter
          links={[
            {
              key: '文档',
              title: '文档',
              href: 'http://ant.design',
              blankTarget: true,
            },
            {
              key: 'gitlab',
              title: (<span><Icon type="github" /><span>gitlab</span></span>),
              href: 'http://gitlab.gs.9188.com/caiyi.html5.public/template-antd-pro',
              blankTarget: true,
            },
            {
              key: '有鱼金融',
              title: '有鱼金融',
              href: 'https://www.youyuwo.com',
              blankTarget: true,
            },
          ]}
          copyright={
            <Fragment>
              Copyright <Icon type="copyright" /> 2018 {projectName}
            </Fragment>
          }
        />
      </div>
    )
  }
}
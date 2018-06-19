import React from 'react';
import { connect } from 'dva';
import { Redirect, Switch } from 'dva/router';
import styles from './MainPage.css';
import { Layout, Breadcrumb } from 'antd';
import BasicMenu from '../components/BasicMenu/BasicMenu';
import { getHeraderMenuDate, getSiderMenuDate } from '../common/menu';

const { Header, Content, Sider } = Layout;

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};
getSiderMenuDate().forEach(getRedirect);

function MainPage() {
  return (
    <Layout style={{ height:'100%' }}>
      <Header className="header">
        <div className={styles.logo} />
        <BasicMenu
          menuData={ getHeraderMenuDate() }
          mode = { 'horizontal' }
          theme = { 'dark' }
          defaultSelectedKeys={['process']}
          style={{ lineHeight: '64px' }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <BasicMenu
            menuData = { getSiderMenuDate() }
            mode = { 'inline' }
            theme = { 'light' }
            defaultSelectedKeys={['todo']}
            defaultOpenKeys={['process']}
            style={{ height: '100%', borderRight: 0 }}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Switch>
              {redirectData.map(item => (
                <Redirect key={item.from} exact from={item.from} to={item.to} />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

MainPage.prototype = {

};

export default connect()(MainPage);

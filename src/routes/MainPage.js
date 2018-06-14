import React from 'react';
import { connect } from 'dva';
import styles from './MainPage.css';
import { Layout, Breadcrumb } from 'antd';
import BasicMenu from '../components/BasicMenu/BasicMenu';
import { headerMenuData, siderMenuData } from '../common/menu';

const { Header, Content, Sider } = Layout;

function MainPage() {
  return (
    <Layout style={{ height:'100%' }}>
      <Header className="header">
        <div className={styles.logo} />
        <BasicMenu
          menuData={ headerMenuData }
          mode = { 'horizontal' }
          theme = { 'dark' }
          defaultSelectedKeys={['process']}
          style={{ lineHeight: '64px' }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <BasicMenu
            menuData = { siderMenuData }
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
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

MainPage.prototype = {

};

export default connect()(MainPage);

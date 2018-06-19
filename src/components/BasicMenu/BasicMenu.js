import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { SubMenu } = Menu;

export default class BasicMenu extends Component{
  constructor(props) {
    super(props);
    this.menus = props.menuData;
  };
  /**
   * 获得菜单子节点
   */
  getNavMenuItems = menusData => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.name)
      .map(item => {
        // make dom
        return this.getSubMenuOrItem(item);
      })
      .filter(item => item);
  };
  /**
   * get SubMenu or Item
   */
  getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      // 当无子菜单时就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {this.getIcon(item.icon)}
                  <span>{item.name} </span>
                </span>
              ) : item.name
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
    }
  };
  /**
   * 返回Link
   */
  getMenuItemPath = item => {
    const itemPath = `/${item.path || ''}`.replace(/\/+/g, '/');
    const icon = this.getIcon(item.icon);
    const { target, name } = item;
    return (
      <Link
        to = {itemPath}
        target = {target}
      >
        {icon}
        <span>{name}</span>
      </Link>
    );
  };
  /**
   * 渲染图标
   */
  getIcon = icon => {
    if (typeof icon === 'string') {
      return <Icon type={icon} />;
    }
    return icon;
  };
  render () {
    return (
      <Menu
        theme={ this.props.theme }
        mode={ this.props.mode }
        defaultSelectedKeys={ this.props.defaultSelectedKeys }
        defaultOpenKeys={ this.props.defaultOpenKeys }
        style={ this.props.style }
      >
        { this.getNavMenuItems(this.menus) }
      </Menu>
    )
  }
}

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

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
      return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
    }
  };
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

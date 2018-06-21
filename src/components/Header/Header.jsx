import React, { Component } from 'react';
import { Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: '首页',
    path: '/#/',
  },
  {
    name: '智能硬件',
    path: '/#/hardware',
  },
  {
    name: '软件开发',
    path: '/#/software',
  },
  {
    name: '解决方案',
    path: '/#/web',
  },
  {
    name: '物联网卡',
    path: '/#/sim',
  },
  {
    name: '关于我们',
    path: '/#/aboutus',
  },
];

export default class Header extends Component {
  renderBalloonContent = (menu) => {
    return (
      <Menu.Item>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu) => {
            return (
              <a href="#" className="custom-sub-menu">
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu) => {
      if (menu.children) {
        return this.renderBalloonContent(menu);
      }
      return (
        <Menu.Item key={menu.path}>
          <a href={menu.path}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <div className="header-navbar">
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}

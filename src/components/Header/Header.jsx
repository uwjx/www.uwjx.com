import React, { Component } from 'react';
import { Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: '联系方式',
  },
  {
    name: '在线文档',
  },
  {
    name: '客户案例',
  },
  {
    name: 'Github',
  },
  {
    name: '关于我们',
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

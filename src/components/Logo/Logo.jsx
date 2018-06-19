import React, { Component } from 'react';
import './logo.css';

const LIGHT =
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/uwjx-logo-png-white.png';

export default class Logo extends Component {
  render() {
    const logo = LIGHT;
    return (
      <div
        className="logo"
      >
        <img className="logoImg" src={logo} width="120" height="120" alt="logo" />
        <span className="logo-title">上海青城信息科技有限公司</span>
        <span className="logo-title-en">Shanghai Qingcheng Information Technology Co.,Ltd. Copyright</span>
      </div>
    );
  }
}

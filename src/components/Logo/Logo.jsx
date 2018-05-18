import React, { Component } from 'react';
import './logo.css';

const LIGHT =
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/png3.png';

export default class Logo extends Component {
  render() {
    const logo = LIGHT;
    return (
      <div
        className="logo"
      >
        <img className="logoImg" src={logo} width="120" height="120" alt="logo" />
        <span className="logo-title">物联网云平台</span>
      </div>
    );
  }
}

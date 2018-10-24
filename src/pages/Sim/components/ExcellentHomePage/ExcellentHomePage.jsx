import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog } from '@icedesign/base';

import './ExcellentHomePage.scss';

export default class ExcellentHomePage extends Component {
  static displayName = 'ExcellentHomePage';

  state = {
    visible: false,
  };
  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div className="excellent-home-page" style={{ height: '100vh' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundImage:
              'url(https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/tab-sim.jpg)',
            backgroundPosition: 'center',
          }}
        />

        <div className="excellent-home-page-background" />
        <div className="excellent-home-page-content-wrapper">
          <div className="excellent-home-page-content">
            <h2 className="title">安全 优惠 便捷</h2>
            <p className="subtitle">
              支持移动/电信/联通三网的 普卡/micro-SIM/nano-SIM 制式
            </p>
            <div
              className="excellent-home-page-buttons"
              style={{ textAlign: 'center', marginTop: 70 }}
            >
              <Dialog
                visible={this.state.visible}
                onOk={this.onClose}
                closable="esc,mask,close"
                onCancel={this.onClose}
                onClose={this.onClose}
                title="联系方式"
              >
                <ul>
                  <li>联系人：王经理</li>
                  <li>电话&微信：18501667737</li>
                  <li>
                    <img src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/hugh-wechat.png" width={120} height={120} alt="wechat" />
                  </li>
                </ul>
              </Dialog>
              <Button
                style={{
                  height: 50,
                  padding: '0 58px',
                  fontSize: 16,
                  marginBottom: '20px',
                  background: '#00CE72',
                }}
                onClick={this.onOpen}
                type="primary"
                size="large"
              >
                联系我们
                <div
                  style={{
                    marginLeft: '5px',
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRight: '1px solid #fff',
                    borderBottom: '1px solid #fff',
                    transform: 'rotate(-45deg)',
                  }}
                />
              </Button>
            </div>

            <div style={{ marginTop: '80px', position: 'relative' }}>
              <div style={styles.gitContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  leftButton: {
    marginRight: '20px',
  },
  gitStar: {
    border: '0px',
    height: '32px',
    width: '145px',
    margin: '0 auto',
  },
  gitContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  updateLogLinkWrap: {
    textAlign: 'center',
  },
  updateLogLink: {
    color: '#fff',
  },
};

import React, { Component } from 'react';
import { Button, Dialog } from '@icedesign/base';
import './LandingIntroBanner.scss';

export default class LandingIntroBanner extends Component {
  static displayName = 'LandingIntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
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
      <div className="landing-intro-banner" style={{ height: '100vh' }}>
        <div
          className="landing-intro-banner-background"
          style={{
            backgroundImage:
              'url(https://img.alicdn.com/tfs/TB1cWGdnXGWBuNjy0FbXXb4sXXa-1900-898.png)',
            backgroundPosition: 'center',
          }}
        />
        <div className="landing-intro-banner-content-wrapper">
          <div className="landing-intro-banner-content">
            <h2 style={styles.title}>企业信息化合作伙伴</h2>
            <p style={styles.subTitle}>
              提供专业的软件、硬件系统化解决方案
            </p>
            <div
              className="landing-intro-banner-buttons"
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
              <a href="#/hardware">
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginBottom: '20px',
                    marginRight: '20px',
                    color: '#3080FE',
                  }}
                  size="large"
                  type="normal"
                >
                  硬件定制开发
                </Button>
              </a>
              <a href="#/software">
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginBottom: '20px',
                  }}
                  type="primary"
                  size="large"
                >
                  软件定制开发
                </Button>
              </a>
            </div>

            <div style={{ marginTop: '80px', position: 'relative' }}>
              <div style={styles.gitContainer}>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '46px',
    letterSpacing: '4px',
    lineHeight: '60px',
    color: '#fff',
    marginBottom: '30px',
  },
  subTitle: {
    fontSize: '20px',
    margin: '0px',
    color: '#fff',
    textShadow: '#C8C8C8 1px 1px 2px',
    textAlign: 'center',
    lineHeight: '1.7em',
  },
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

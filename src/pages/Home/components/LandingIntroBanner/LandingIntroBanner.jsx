import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import './LandingIntroBanner.scss';

export default class LandingIntroBanner extends Component {
  static displayName = 'LandingIntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

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
            <h2 style={styles.title}>赋能设备入网建设</h2>
            <p style={styles.subTitle}>
              做最专业的物联网系统服务平台
            </p>
            <div
              className="landing-intro-banner-buttons"
              style={{ textAlign: 'center', marginTop: 70 }}
            >
              <a href="#" style={styles.leftButton}>
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginBottom: '20px',
                    color: '#3080FE',
                  }}
                  size="large"
                  type="normal"
                >
                  联系我们
                </Button>
              </a>
              <a href="https://console.uwjx.com">
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
                  进入云平台
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

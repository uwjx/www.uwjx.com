import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import { Link } from 'react-router-dom';

export default class FeatureList extends Component {
  static displayName = 'FeatureList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.contentWrapper}>
          <div style={styles.titleWrapper}>
            <h3 style={styles.title}>智能硬件</h3>
            <div style={styles.titleLine}>
              <div style={styles.titleHighlightLine} />
            </div>
          </div>
          <p style={styles.desc}>
            提供专业的物联网智能硬件开发解决方案，支持定制化的情景开发。
          </p>
          <div style={styles.featureListWrapper}>
            <div style={styles.featureItem}>
              <img
                src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/home_xp.png"
                alt=""
                style={{ width: 90, height: 90 }}
              />
              <h4 style={styles.featureTitle}>ARM 芯片</h4>
              <p style={styles.featureDesc}>Intel/飞思卡尔/ST/Renesas等</p>
            </div>
            <div style={styles.featureItem}>
              <img
                src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/home_os.png"
                alt=""
                style={{ width: 90, height: 90 }}
              />
              <h4 style={styles.featureTitle}>智能系统</h4>
              <p style={styles.featureDesc}>采用AliOS Thing现代化操作系统</p>
            </div>
            <div style={styles.featureItem}>
              <img
                src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/home_cgq.png"
                alt=""
                style={{ width: 90, height: 90 }}
              />
              <h4 style={styles.featureTitle}>丰富传感</h4>
              <p style={styles.featureDesc}>支持温湿度/位置/接近/通断/红外等</p>
            </div>
            <div style={styles.featureItem}>
              <img
                src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/home_net.png"
                alt=""
                style={{ width: 90, height: 90 }}
              />
              <h4 style={styles.featureTitle}>全面物联</h4>
              <p style={styles.featureDesc}>2G/3G/4G/WIFI/NB-IOT/蓝牙等</p>
            </div>
          </div>
          <div style={styles.extraInfo}>
            <Link to="">
              <Button style={styles.extraButton}>了解更多 &gt;</Button>
            </Link>
          </div>
        </div>
        <div style={styles.clipBackground} />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: 690,
    marginTop: '-120px',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    marginTop: 120,
  },
  titleLine: {
    width: 140,
    height: 2,
    marginTop: 17,
    background: '#eee',
    borderLeft: '2px solid ##5fb2f8',
  },
  titleHighlightLine: {
    background: '#3080FE',
    height: 2,
    width: 33,
  },
  title: {
    color: '#223C4E',
    fontSize: 36,
  },
  desc: {
    color: '#6D7A82',
    fontSize: 16,
    lineHeight: 1.5,
    marginTop: 24,
    width: 525,
    textAlign: 'center',
  },
  featureListWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 60,
    maxWidth: 960,
    width: '100%',
  },
  featureItem: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  featureTitle: {
    marginTop: 35,
    fontSize: 24,
    color: '#333333',
  },
  featureDesc: {
    fontSize: 14,
    color: '#999999',
    marginTop: 0,
    marginBottom: 0,
  },
  extraButton: {
    marginTop: 50,
    borderColor: '#3080FE',
    background: 'transparent',
    color: '#3080FE',
  },
  clipBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: '#fff',
    clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
  },
};

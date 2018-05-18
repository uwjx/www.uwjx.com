import React, { Component } from 'react';
import { Button } from '@icedesign/base';

const brandlist = [
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/zwy.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/hd.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/arm-logo-white-rgb.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/keruis-logo.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/bd.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/tencent.jpg',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/liantong.jpg',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/dianxin.jpg',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/china-yidong.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/baidu.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/github.jpg',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/aly.png',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/shunfeng.jpg',
  'https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/partner/al-tx.png',
];

export default class BrandList extends Component {
  static displayName = 'BrandList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleWrapper}>
          <h3 style={styles.title}>合作伙伴</h3>
          <div style={styles.titleLine}>
            <div style={styles.titleHighlightLine} />
          </div>
        </div>
        <p style={styles.desc}>
          270多位客户，10W+台设备正在使用，持续可靠的稳定，即时有效的服务
        </p>
        <div style={styles.brandListWrapper}>
          {brandlist.map((item, index) => {
            return (
              <div style={styles.brandItem} key={index}>
                <img src={item} alt="" style={styles.brandImage} />
              </div>
            );
          })}
        </div>
        <div style={styles.extraInfo}>
          <Button
            component="a"
            href="#"
            target="_blank"
            style={styles.extraButton}
          >
            查看更多 +
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 60,
    marginTop: '-88px',
    overflow: 'hidden',
  },
  titleWrapper: {
    marginTop: 60,
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
  brandListWrapper: {
    marginTop: 75,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 1150,
  },
  brandItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 150,
    maxHeight: 40,
    padding: '0 20px',
    marginBottom: 60,
  },
  brandImage: {
    width: 'auto',
    height: 'auto',
    maxWidth: 150,
    maxHeight: 40,
  },
  extraButton: {
    borderColor: '#3080FE',
    background: 'transparent',
    color: '#3080FE',
  },
};

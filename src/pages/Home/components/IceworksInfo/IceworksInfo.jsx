import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import { Link } from 'react-router-dom';

export default class ProductIntro extends Component {
  static displayName = 'ProductIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.productContent}>
          <div style={styles.productInfo}>
            <h3 style={styles.title}>云平台</h3>
            <div style={styles.titleLine}>
              <div style={styles.titleHighlightLine} />
            </div>
            <p style={styles.desc}>
              集设备管理，实时监控，设备状态查看，历史数据报表，设备远程控制，行程管理，报警管理统计，维修工单，日志查看，权限控制，账单报表等于一体的全面综合性云一站式平台。
            </p>
            <Link to="">
              <Button style={styles.extraButton}>了解更多 &gt;</Button>
            </Link>
          </div>
          <div style={styles.productSnapshot}>
            <img
              width={696}
              height={527}
              src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/2018-05-18_141552.png"
              alt=""
            />
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
    marginTop: '-130px',
    paddingTop: '10px',
  },
  productContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 120,
  },
  titleLine: {
    width: 140,
    height: 2,
    marginTop: 17,
    background: '#fff',
    borderLeft: '2px solid ##5fb2f8',
  },
  titleHighlightLine: {
    background: '#3080FE',
    height: 2,
    width: 33,
  },
  productSnapshot: {},
  productInfo: {
    width: 400,
    marginRight: 90,
    marginTop: 40,
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
  },
  extraButton: {
    marginTop: 35,
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
    background: '#FAFAFA',
    clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
  },
};

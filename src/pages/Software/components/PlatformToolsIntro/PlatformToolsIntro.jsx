import React, { Component } from 'react';

export default class PlatformIntro2 extends Component {
  static displayName = 'PlatformIntro2';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          ...styles.wrapper,
          backgroundImage:
            'url(https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/bg333.png)',
        }}
      >
        <div style={styles.body}>
          <h2 style={styles.title}>合作流程</h2>
          <p style={styles.text}>
            需求分析-原型设计+UI效果图-编码开发-测试交付-线上维护<br />每个项目配备经验丰富的产品经理全程主导<br />提供服务器代理运维 最低每年仅收费300元
          </p>
        </div>
        <img
          src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_hzlc.png"
          alt=""
          width="1000"
          height="460"
          style={styles.image}
        />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: 740,
    overflow: 'hidden',
  },
  body: {
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: '24px',
    letterSpacing: '2px',
  },
  image: {
    margin: '0 auto',
    marginTop: 50,
    display: 'block',
  },
};

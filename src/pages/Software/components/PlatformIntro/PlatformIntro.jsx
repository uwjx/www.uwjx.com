import React, { Component } from 'react';

export default class PlatformIntro extends Component {
  static displayName = 'PlatformIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.body}>
          <h2 style={styles.title}>经典移动案例</h2>
          <p style={styles.text}>
            我们有十几个手机app客户端开发经验<br />涉及电子商务、社交软件、工具软件、企业管理等多个领域<br />我们相信您的任何需求我们都可以实现
          </p>
        </div>
        <img
          alt=""
          src="https://img.alicdn.com/tfs/TB1kqzXqL1TBuNjy0FjXXajyXXa-2520-1040.jpg"
          width="1260"
          height="520"
          style={styles.image}
        />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: 740,
    backgroundColor: '#fff',
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
    letterSpacing: 2,
  },
  image: {
    margin: '20px auto 0 auto',
    display: 'block',
  },
};

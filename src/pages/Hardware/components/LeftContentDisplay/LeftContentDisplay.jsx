import React, { Component } from 'react';
import { enquireScreen } from 'enquire-js';

export default class LeftContentDisplay extends Component {
  static displayName = 'LeftContentDisplay';

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  render() {
    const contentStyle = {
      height: this.state.isMobile ? '300px' : '600px',
    };
    return (
      <div style={styles.container}>
        <div style={{ ...styles.content, ...contentStyle }}>
          <div style={styles.col}>
            <h2 style={styles.title}>ARM芯片</h2>
            <p style={styles.description}>
              我们主要开发基于ARM架构的单片机程序，有成熟的在ST、NPX、瑞赛等平台的成功案例
            </p>
          </div>
          <div style={styles.col}>
            <img
              src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/xp.jpg"
              alt="img"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 0',
  },
  content: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  col: {
    width: '50%',
    padding: '0 20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
    lineHeight: '22px',
  },
  image: {
    position: 'absolute',
    top: '20px',
    width: '40%',
  },
};

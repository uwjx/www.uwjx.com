import React, { Component } from 'react';

export default class RightContentDisplay extends Component {
  static displayName = 'RightContentDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-content-display" style={styles.container}>
        <div className="right-content-display-content" style={styles.content}>
          <div style={styles.col}>
            <img
              src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/gps.png"
              alt="img"
              style={styles.image}
            />
          </div>
          <div style={styles.col}>
            <h2 style={styles.title}>GPS/北斗定位</h2>
            <p style={styles.description}>
              基于GPS或者北斗的定位开发
            </p>
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
    width: '48%',
    padding: '0 1%',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  description: {
    color: '#999',
    lineHeight: '22px',
  },
  image: {
    width: '100%',
    margin: '0 auto',
    display: 'block',
    maxWidth: '360px',
  },
};

import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const generatorData = (count) => {
  return Array.from({ length: count }).map((item, index) => {
    return {
      name: `成员${index + 1}`,
      description: '成员的相关描述',
      imgUrl:
        'https://img.alicdn.com/tfs/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png',
    };
  });
};

export default class TeamDisplay extends Component {
  static displayName = 'TeamDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        name: '王欢',
        description: '总经理',
        imgUrl:
          'https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/abouts_pic.png',
      },
      {
        name: '杨吕杰',
        description: '产品经理',
        imgUrl:
          'https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/abouts_pic.png',
      },
      {
        name: '吴健',
        description: '前端工程师',
        imgUrl:
          'https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/abouts_pic.png',
      },
      {
        name: '李佳智',
        description: 'Java工程师',
        imgUrl:
          'https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/abouts_pic.png',
      },
      {
        name: '朱宁宁',
        description: 'UI设计师',
        imgUrl:
          'https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/abouts_pic.png',
      },
      {
        name: '梁洁瑜',
        description: '行政助理/客服',
        imgUrl:
          'https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/abouts_pic.png',
      },
    ];
    return (
      <div className="team-display" style={styles.container}>
        <h2 style={styles.title}>我们的团队</h2>
        <Row wrap>
          {data.map((item, index) => {
            return (
              <Col xxs="12" s="8" l="8" key={index}>
                <div style={styles.item}>
                  <img
                    src={item.imgUrl}
                    style={styles.avatar}
                    alt={item.name}
                  />
                  <h5 style={styles.name}>{item.name}</h5>
                  <p style={styles.description}>{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
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
  title: {
    textAlign: 'center',
    fontSize: '28px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    marginTop: '15px',
  },
  description: {
    lineHeight: '22px',
    color: '#999',
  },
};

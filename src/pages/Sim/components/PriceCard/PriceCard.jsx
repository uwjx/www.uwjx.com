import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const data = [
  {
    title: '低流量配置 - 2M/月',
    price: '5元/年',
    description:
      '中国移动。适用于流量较低的使用场景，如：水电抄表等。每个月2M流量，每年5元。',
  },
  {
    title: '一般流量配置 - 30M/月',
    price: '20元/年',
    description:
      '中国移动。适用于流量一般的使用场景，如：车载定位等。每个月30M流量，每年20元。',
  },
  {
    title: '自定义配置',
    price: 'N元/年',
    description:
      '支持中国移动、中国联通、中国电信三网。支持普卡/micro-SIM/nano-SIM所有制式卡片。',
  },
];

export default class PriceCard extends Component {
  static displayName = 'PriceCard';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Row gutter="20" wrap>
            {data.map((item, index) => {
              return (
                <Col xxs="24" s="8" l="8" key={index}>
                  <div style={styles.item}>
                    <div style={styles.head}>
                      <h3 style={styles.title}>{item.title}</h3>
                      <p style={styles.description}>{item.description}</p>
                    </div>
                    <div style={styles.info}>
                      <p style={styles.price}>￥{item.price}</p>
                    </div>
                    <div style={styles.buyBtn}>
                      <a href="/" style={styles.link}>
                        立即购买
                      </a>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background:
      'url(https://img.alicdn.com/tfs/TB1JGoDi3vD8KJjy0FlXXagBFXa-5040-2811.png)',
    borderRadius: 0,
    width: '100%',
    padding: '80px 0',
  },
  content: {
    maxWidth: '1080px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  item: {
    marginBottom: '20px',
    padding: '20px 30px 60px',
    background: '#fff',
    borderRadius: '6px',
  },
  head: {
    padding: '30px 0',
    textAlign: 'center',
    borderRadius: '6px 6px 0 0',
  },
  title: {
    margin: '0 0 5px',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  price: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '22px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    margin: '20px auto',
    lineHeight: '22px',
    textAlign: 'center',
    width: '60%',
    color: '#999',
  },
  buyBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  link: {
    padding: '6px 15px',
    background: '#3080FE',
    borderRadius: '16px',
    color: '#fff',
  },
};

import React, { Component } from 'react';

export default class CardItems extends Component {
  static displayName = 'CardItems';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.hyThirdPartyWrapper}>
        <div style={styles.hyThirdParty}>
          <h3 style={styles.hyThirdPartyTitle}>
            客户案例
            <a style={styles.thirdPartyMore} href="#">
              查看更多案例
            </a>
          </h3>

          <div style={styles.thirdPartyDetails}>
            <div style={styles.thirdPartyDetail}>
              <div
                style={{
                  ...styles.thirdPartyDetailItem,
                  ...styles.thirdPartyDetailItemFirst,
                }}
              >
                <img
                  style={styles.thirdPartyDetailImg}
                  src="https://gw.alipayobjects.com/zos/rmsportal/geocpIkIixaGovHECTdw.svg"
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>上海可瑞视冷链科技有限公司</h5>
                <p style={styles.thirdPartySold}>
                  已上线
                  {/*<span style={styles.thirdPartySoldNumber}>712</span> 天*/}
                </p>
                <p style={styles.thirdPartyDesc}>
                  解决医疗冷链管理和温度追溯
                </p>
                <a style={styles.thirdPartyLink} href="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/ppt/%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B-%E6%99%BA%E6%85%A7%E5%86%B7%E9%93%BE%E7%89%A9%E6%B5%81.pptx">
                  点击下载 查看案例
                </a>
              </div>

              <div style={styles.thirdPartyDetailItem}>
                <img
                  style={styles.thirdPartyDetailImg}
                  src="https://gw.alipayobjects.com/zos/rmsportal/kMXuMYkLTCSkTnzoiRxs.png"
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>萌店</h5>
                <p style={styles.thirdPartySold}>
                  已上线
                  {/*<span style={styles.thirdPartySoldNumber}>565</span> 天*/}
                </p>
                <p style={styles.thirdPartyDesc}>
                  以消费者为中心的B2V2C的开店平台。通过一键分享到微信、微博、qq等SNS平台来宣传自己的店铺并促成交易。
                </p>
                <a style={styles.thirdPartyLink} href="http://www.mengdian.com" target="_blank">
                  点击跳转 查看案例
                </a>
              </div>

              <div style={styles.thirdPartyDetailItem}>
                <img
                  style={styles.thirdPartyDetailImg}
                  src="https://gw.alipayobjects.com/zos/rmsportal/TpqeamkGvHuXSWKsLOth.png"
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>观致逸云</h5>
                <p style={styles.thirdPartySold}>
                  已上线
                  {/*<span style={styles.thirdPartySoldNumber}>324</span> 天*/}
                </p>
                <p style={styles.thirdPartyDesc}>
                  观致逸云带来的便捷及全新社交车生活， 为你开启了一种与世界互联的新关系。
                </p>
                <a style={styles.thirdPartyLink} href="http://www.qorosqloud.com/" target="_blank">
                  点击跳转 查看案例
                </a>
              </div>

              <div
                style={{
                  ...styles.thirdPartyDetailItem,
                  ...styles.thirdPartyDetailItemLast,
                }}
              >
                <img
                  style={styles.thirdPartyDetailImg}
                  src="https://gw.alipayobjects.com/zos/rmsportal/ykkPpNnSjuqpqBhxjTir.png"
                  alt=""
                />
                <h5 style={styles.thirdPartyName}>智猫净水器</h5>
                <p style={styles.thirdPartySold}>
                  已上线
                  {/*<span style={styles.thirdPartySoldNumber}>94</span> 天*/}
                </p>
                <p style={styles.thirdPartyDesc}>
                  智猫智能净水器管理系统，提供整体物联网水机解决方案。
                </p>
                <a style={styles.thirdPartyLink} href="http://www.zhimoo.com/" target="_blank">
                  点击跳转 查看案例
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  hyThirdPartyWrapper: {
    background: '#fff',
    minWidth: '1280px',
  },
  hyThirdParty: {
    paddingTop: '47px',
    paddingBottom: '40px',
    textAlign: 'center',
    width: '1200px',
    margin: '0 auto',
  },
  hyThirdPartyTitle: {
    position: 'relative',
    fontFamily: 'Microsoft YaHei',
    fontSize: '26px',
    lineHeight: '40px',
    color: '#999',
    fontWeight: '400',
    verticalAlign: 'middle',
    marginBottom: '40px',
  },
  thirdPartyMore: {
    position: 'absolute',
    right: '0',
    top: '12px',
    color: '#108ee9',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    textDecoration: 'none',
  },
  thirdPartyDetails: {
    position: 'relative',
    height: '400px',
    margin: '0',
    padding: '0',
  },
  thirdPartyDetail: {
    zIndex: '0',
    fontSize: '0',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    display: 'block',
    WebkitTransition: 'opacity .3s linear',
    transition: 'opacity .3s linear',
  },
  thirdPartyDetailItem: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '270px',
    height: '400px',
    borderRadius: '2px 2px 0 0',
    margin: '0 20px',
    border: '1px solid #eaeaea',
    boxSizing: 'border-box',
    WebkitTransition: '-webkit-transform .2s linear',
    transition: 'transform .2s linear,\n-webkit-transform .2s linear',
  },
  thirdPartyDetailItemFirst: {
    marginLeft: '0',
  },
  thirdPartyDetailItemLast: {
    marginRight: '0',
  },
  thirdPartyDetailImg: {
    width: '270px',
    height: '180px',
    borderRadius: '2px 2px 0 0',
    position: 'relative',
    left: '-1px',
    border: '0',
  },
  thirdPartyName: {
    marginTop: '20px',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#333',
    fontWeight: '600',
  },
  thirdPartySold: {
    fontSize: '14px',
    color: '#333',
    lineHeight: '20px',
  },
  thirdPartySoldNumber: {
    color: '#108ee9',
    fontWeight: '500',
  },
  thirdPartyDesc: {
    margin: '14px 15px 0',
    color: '#333',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '20px',
    height: '60px',
  },
  thirdPartyLink: {
    marginTop: '15px',
    display: 'inline-block',
    padding: '5px 37px',
    fontSize: '14px',
    color: '#108ee9',
    border: '1px solid #108ee9',
    borderRadius: '4px',
    WebkitTransition: 'all .2s linear',
    transition: 'all .2s linear',
  },
};

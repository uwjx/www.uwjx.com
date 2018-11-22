import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    height: '223px',
    textAlign: 'center',
    background: '#fff',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '280px',
    margin: '38px 35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize: '16px',
    color: '#999',
    lineHeight: '21px',
  },
};

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_wx.png"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>微信公众号/小程序</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>微信开放接口，微信支付，微信活动，会员卡等</p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_app.png"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>手机APP</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>Android/IOS/Native全面支持</p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_h5.png"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>H5</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>企业营销活动，H5宣传，抽奖，秒杀等</p>
        </div>
      </div>
    );
  }
}



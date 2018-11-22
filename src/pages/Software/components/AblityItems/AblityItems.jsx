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
            src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_gw.png"
            style={style.hyAbilityItemImgStyle} />
          <h3 style={style.hyAbilityItemTitleStyle}>企业官网</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>企业官网定制开发，最低只收费300元，包含网站托管1年的费用。</p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_web.png"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>Web管理系统</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>企业ERP，CRM系统，业务逻辑管理系统等。</p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://uwjx-production-public-read.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/software_emarket.png"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>在线商城</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>B2B，B2C，手机商城，公众号商城，小程序商城等</p>
        </div>
      </div>
    );
  }
}



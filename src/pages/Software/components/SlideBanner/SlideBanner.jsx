import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';



export default class SlideBanner extends Component {
  static displayName = 'SlideBanner';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  isSelected = (selected) => selected ? ' selected' : ''

  onMouseEnter = (event) => {
    const {index} = event.currentTarget.dataset;
    const selectedIndex = parseInt(index, 10);
    if (!isNaN(selectedIndex)) {
      this.setState({
        selectedIndex,
      });
    }
  }

  render() {
    const {selectedIndex} = this.state;
    return (
      <div className="hy-friends-list">
        <a
          href="#"
          target="_blank"
          className={`hy-friends-item ${selectedIndex === 0 ? 'selected': ''}`}
          data-index="0"
          onMouseEnter={this.onMouseEnter} >
          <img className="hy-friends-img" src="https://gw.alipayobjects.com/zos/rmsportal/CdqiMTPofpGZyLcJkDHX.jpg"/>
          <h4>天地华城</h4>
          <span>适用场景：物业缴费</span>
          <p>昆山天地华城物业，在接入在线物业缴费渠道之后，上线一个月，缴费日均超过200笔，大幅提升了缴费效率。</p>
          <img className="hy-friends-qr" src="https://gw.alipayobjects.com/zos/rmsportal/MhShJeukuJNkenGytSiq.svg"/>
        </a>

        <a
          href="#"
          target="_blank"
          className={`hy-friends-item ${selectedIndex === 1 ? 'selected': ''}`}
          data-index="1"
          onMouseEnter={this.onMouseEnter}>
          <img className="hy-friends-img" src="https://gw.alipayobjects.com/zos/rmsportal/ZWoRmVSYImddLaRYyQog.jpg"/>
          <h4>产业园区</h4>
          <span>适用场景：产业园智慧管理</span>
          <p>接入微信和支付宝的公众号和小程序等功能，园区智慧管理升级，智能路灯，智能车辆出入，智能保修，完成智慧园区建设。</p>
          <img className="hy-friends-qr" src="https://gw.alipayobjects.com/zos/rmsportal/cONkAwDeKdlzkcgchJLT.png"/>
        </a>

        <a
          href="#"
          target="_blank"
          className={`hy-friends-item ${selectedIndex === 2 ? 'selected': ''}`}
          data-index="2"
          onMouseEnter={this.onMouseEnter}>
          <img className="hy-friends-img" src="https://gw.alipayobjects.com/zos/rmsportal/MHiDpDgUNShsjTCQXKKd.jpg"/>
          <h4>宋都阳光</h4>
          <span>适用场景：智能门禁</span>
          <p>基于年轻人“手机不离身”的特点，安装智能门禁，外部人员出入记录线上化，提升访客通行速度，减少手工登记环节，提升了小区的整体安全性，规范管理流程，实现了物业与业主的共赢。</p>
          <img className="hy-friends-qr" src="https://gw.alipayobjects.com/zos/rmsportal/cONkAwDeKdlzkcgchJLT.png"/>
        </a>

        <a
          href="#"
          target="_blank"
          className={`hy-friends-item ${selectedIndex === 3 ? 'selected': ''}`}
          data-index="3"
          onMouseEnter={this.onMouseEnter}>
          <img className="hy-friends-img" src="https://gw.alipayobjects.com/zos/rmsportal/JQBQcVBtAiyTGINHQNzh.jpg"/>
          <h4>金地物业</h4>
          <span>适用场景：小区主页</span>
          <p>金地物业借助小程序打造智慧社区，整合物业资源，引入各项服务与资源，从而增加收入，同时积累大批关注用户，实现了良性循环。</p>
          <img className="hy-friends-qr" src="https://gw.alipayobjects.com/zos/rmsportal/cONkAwDeKdlzkcgchJLT.png"/>
        </a>
      </div>
    );
  }
}

const styles = {

}

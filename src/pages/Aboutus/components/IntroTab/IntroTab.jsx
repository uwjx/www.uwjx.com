import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class IntroTab extends Component {
  static displayName = 'IntroTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  isSelected = (index, target) => index === target ? 'selected' : ' '

  clickTab = (event) => {
    let {index} = event.currentTarget.dataset;
    index = parseInt(index, 10);
    if (isNaN(index)) {
      index = 0;
    }
    this.setState({index});
  }
  render() {
    const {index} = this.state;
    return (
      <div className="scenario">
        <h3>招聘职位</h3>
        <div className="scenario-slider ">
          <div className="scenario-list">
            <div data-index="0" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 0)}`}>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/buKnoKlvQeEzYxttqrFh.svg" />
              <img
                className="selected"
                src="https://gw.alipayobjects.com/zos/rmsportal/MnBlZZrbYBdVvXrCOyfW.svg"
              />
              <h4>后端工程师</h4>
              <p>Java/Python/.Net</p>
            </div>

            <div data-index="1" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 1)}`}>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/BdPVAfibJHPeFvZIcsTr.svg" />
              <img
                className="selected"
                src="https://gw.alipayobjects.com/zos/rmsportal/NqHbRYuggzIiBJTZOCfa.svg"
              />
              <h4>前端工程师</h4>
              <p>H5/NodeJS/React</p>
            </div>

            <div data-index="2" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 2)}`}>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ZDqQbDUiGLDzygPQIMxp.svg" />
              <img
                className="selected"
                src="https://gw.alipayobjects.com/zos/rmsportal/rHxglRXhjrhTOgRfqrah.svg"
              />
              <h4>设计和产品</h4>
              <p>Ps/Axure/Sketch</p>
            </div>
          </div>
        </div>
        <div className="scenario-detail-list bt1px">
          <div className={`scenario-detail-item ${this.isSelected(index, 0)}`}>
            <div className="scenario-detail-left">
              <h4>
                职位名称：后端工程师
              </h4>
              <p>
                Java开发工程师
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">工作内容</h5>
                  <p className="ability-desc">
                    1、商务能力：有物业行业资源和客户 <br />2、开发能力：有系统开发和对接能力<br />{' '}
                    3、服务能力：有物业公司的运营活动和地推引导等服务运营能力
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">能力要求</h5>
                  <p className="ability-desc">
                    1、商务能力：有物业行业资源和客户 <br />2、开发能力：有系统开发和对接能力<br />{' '}
                    3、服务能力：有物业公司的运营活动和地推引导等服务运营能力
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">福利待遇</h5>
                  <p className="ability-desc">
                    1、商务能力：有物业行业资源和客户 <br />2、开发能力：有系统开发和对接能力<br />{' '}
                    3、服务能力：有物业公司的运营活动和地推引导等服务运营能力
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">联系方式</h5>

                  <p className="ability-desc">
                    1、商务能力：有物业行业资源和客户 <br />2、开发能力：有系统开发和对接能力<br />{' '}
                    3、服务能力：有物业公司的运营活动和地推引导等服务运营能力
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ATrmyVCFsdLJlliHBppp.png" />
            </div>
          </div>

          <div className={`scenario-detail-item ${this.isSelected(index, 1)}`}>
            <div className="scenario-detail-left">
              <h4>
                小区生活号
                <a href="" target="_blank" />
              </h4>
              <p>
                以生活号为阵地，接入各项业务，搭建智慧社区运营阵地。可以通过此平台对用户进行信息推送、服务输出、交易场景打通和会员关系管理；
                支持：自定义扩展区、自定义菜单、用户标签、消息推送
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">场景价值</h5>

                  <p className="ability-desc">
                    为物业公司低成本搭建一个个性化的APP，实现物业品牌露出和形象传播；<br />智慧社区持续的运营阵地，实现服务与用户的连接；<br />借助蚂蚁金服自身的能力、资源以及第三方资源丰富了业主服务内容；<br />生态各方的协作与专业分工，为业主提供更好服务，实现生态共赢
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">包含产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item blue-circle">生活号</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">关联产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item ">业主卡</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">小程序</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">圈子</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">合作门槛及要求</h5>

                  <p className="ability-desc">
                    1、有一定的开发能力，有物业行业合作经验的服务商<br />2、有一定的运营能力，可以进行线上线下的运营活动、地推引导
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/qhiRAOVMONMMircrVhJB.png" />
            </div>
          </div>

          <div className={`scenario-detail-item ${this.isSelected(index, 2)}`}>
            <div className="scenario-detail-left">
              <h4>
                社区理财
                <a href="" target="_blank" />
              </h4>
              <p>
                物业公司在收到物业费停车费等相关费用后，直接发起余利宝的申购，能享受理财收益，待需要费用支出时，再从余利宝中赎回，将资金付给相关人员
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">场景价值</h5>

                  <p className="ability-desc">
                    物业公司：零门槛享受互联网理财服务；获得相对低风险的稳定理财收益；同时保持资金的充分流动性；<br />合作伙伴：与蚂蚁金服低风险理财产品的对接，增强自身方案的完整性，降低物业公司的合作成本，增强市场竞争力；
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">包含产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item blue-circle">余利宝</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">合作门槛及要求</h5>

                  <p className="ability-desc">
                    已开通企业支付宝账号及相关认证<br />
                    <br />
                    <br />
                    <br />
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/ySkOyTnwEMufrSgxRSyq.png" />
            </div>
          </div>
        </div>

        <div className={`scenario-actions ${this.isSelected(index, 0)}`}>
          <a
            target="_blank"
            className="scenario-action primary"
            href="https://openhome.alipay.com/platform/appCreate.htm?templateId=7-8a49-6c036d0837991491877738533&amp;templateName=%E7%89%A9%E4%B8%9A%E7%BC%B4%E8%B4%B9"
          >
            立即接入
          </a>

          <a
            target="_blank"
            className="scenario-action secondary"
            href="https://docs.open.alipay.com/347/106502"
          >
            查看接入指南
          </a>
        </div>

        <div className={`scenario-actions ${this.isSelected(index, 1)}`}>
          <a
            target="_blank"
            className="scenario-action primary"
            href="https://openhome.alipay.com/platform/publicAppCreate.htm?templateId=b-a601-a6009fcc96321499759404361"
          >
            立即接入
          </a>

          <a
            target="_blank"
            className="scenario-action secondary"
            href="https://docs.alipay.com/fw/introduce/106173"
          >
            查看接入指南
          </a>
        </div>

        <div className={`scenario-actions ${this.isSelected(index, 2)}`}>
          <a
            target="_blank"
            className="scenario-action primary"
            href="https://openhome.alipay.com/platform/appCreate.htm?templateId=7-8a49-6c036d0837991491877738533&amp;templateName=%E7%89%A9%E4%B8%9A%E7%BC%B4%E8%B4%B9"
          >
            立即接入
          </a>

          <a
            target="_blank"
            className="scenario-action secondary"
            href="https://docs.open.alipay.com/246/105624"
          >
            接入指南
          </a>
        </div>
      </div>
    );
  }
}


import React, { Component } from 'react';
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

  isSelected = (index, target) => (index === target ? 'selected' : ' ');

  clickTab = (event) => {
    let { index } = event.currentTarget.dataset;
    index = parseInt(index, 10);
    if (isNaN(index)) {
      index = 0;
    }
    this.setState({ index });
  };

  render() {
    const { index } = this.state;
    return (
      <div className="scenario">
        <h3>招聘职位</h3>
        <div className="scenario-slider ">
          <div className="scenario-list">
            <div data-index="0" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 0)}`}>
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/backend.png"
                alt="backend"
              />
              <img
                className="selected"
                src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/backend.png"
                alt="backend"
              />
              <h4>后端工程师</h4>
              <p>Java/Python/.Net</p>
            </div>

            <div data-index="1" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 1)}`}>
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/front.png"
                alt="front"
              />
              <img
                className="selected"
                src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/front.png"
                alt="front"
              />
              <h4>前端工程师</h4>
              <p>H5/NodeJS/React</p>
            </div>

            <div data-index="2" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 2)}`}>
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/design.png" alt="design" />
              <img
                className="selected"
                src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/design.png"
                alt="design"
              />
              <h4>设计和产品</h4>
              <p>Ps/Axure/Sketch</p>
            </div>

            <div data-index="3" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 3)}`}>
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/job_cw.png" alt="design" />
              <img
                className="selected"
                src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/job_cw.png"
                alt="design"
              />
              <h4>财务出纳</h4>
              <p>财务管理 出纳报销</p>
            </div>

            <div data-index="4" onClick={this.clickTab} className={`scenario-item ${this.isSelected(index, 4)}`}>
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/job_xz.png" alt="design" />
              <img
                className="selected"
                src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/job_xz.png"
                alt="design"
              />
              <h4>行政客服</h4>
              <p>日常接待 客户交流</p>
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
                    1、负责公司系统后台Java服务端设计、开发；<br />
                    2、负责与其它系统（微信等）进行对接；<br />
                    3、进行新技术调研，持续对系统进行维护和升级；<br />
                    4、负责微信小程序、微信公众号的后台系统的开发。<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">能力要求</h5>
                  <p className="ability-desc">
                    1、计算机或相关专业本科及以上学历；Java Web后端开发2年以上；<br />
                    2、具有良好的系统分析能力，熟悉软件系统分析/设计的方法论，并有丰富的实践经验；精通Java Web开发，熟悉各种常用的设计模式；<br />
                    3、熟悉Spring、Spring-boot、mybatis等常用框架；<br />
                    4、熟练使用Tomcat、nginx等；了解Redis等缓存机制、MQ、ElasticSearch等搜索引擎；<br />
                    5、熟悉MySQL、MongoDB等数据库应用开发；<br />
                    6、熟悉Git等常用版本管理软件；具有较强的代码走读能力；<br />
                    7、良好的学习能力、沟通能力、适应能力，责任心强，能承受一定的工作压力，有责任心，上进心和自我驱动力；<br />
                    8、熟悉前端开发熟悉者优先、对硬件与通讯协议领域熟悉者优先。<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">福利待遇</h5>
                  <p className="ability-desc">
                    1、薪资待遇：6-12K；<br />
                    2、节假日：按照国家法定执行；<br />
                    3、其它福利：团建，生日祝福，国内旅游等。
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">联系方式</h5>

                  <p className="ability-desc">
                    1、联系人：梁女士<br />
                    2、联系邮箱：hr@uwjx.com<br />
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/java.jpg" alt="java" style={{ height: '100%' }} />
            </div>
          </div>

          <div className={`scenario-detail-item ${this.isSelected(index, 1)}`}>
            <div className="scenario-detail-left">
              <h4>
                职位名称：前端工程师
              </h4>
              <p>
                React开发工程师
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">工作内容</h5>
                  <p className="ability-desc">
                    1、负责公司业务系统前端开发；<br />
                    2、负责微信小程序开发；<br />
                    3、负责工作号H5页面；<br />
                    4、负责 React Native App 开发。<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">能力要求</h5>
                  <p className="ability-desc">
                    1、计算机或相关专业本科及以上学历；react开发1年以上；<br />
                    2、具有良好的业务分析能力，熟悉软件系统分析/设计的方法论；<br />
                    3、熟悉react/npm/nodejs/axios/fetch/echart/map等常用框架；<br />
                    4、熟练restful开发模式；<br />
                    5、熟悉json数据交互；<br />
                    6、熟悉Git等常用版本管理软件；具有较强的代码走读能力；<br />
                    7、良好的学习能力、沟通能力、适应能力，责任心强，能承受一定的工作压力，有责任心，上进心和自我驱动力；<br />
                    8、熟悉后端开发，熟悉小程序开发者优先。<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">福利待遇</h5>
                  <p className="ability-desc">
                    1、薪资待遇：6-12K；<br />
                    2、节假日：按照国家法定执行；<br />
                    3、其它福利：团建，生日祝福，国内旅游等。
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">联系方式</h5>

                  <p className="ability-desc">
                    1、联系人：梁女士<br />
                    2、联系邮箱：hr@uwjx.com<br />
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/react.png" alt="react" style={{ height: '100%' }} />
            </div>
          </div>

          <div className={`scenario-detail-item ${this.isSelected(index, 2)}`}>
            <div className="scenario-detail-left">
              <h4>
                职位名称：设计和产品
              </h4>
              <p>
                photoshop/Axure或其它同类产品
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">工作内容</h5>
                  <p className="ability-desc">
                    1、负责业务系统原型和设计；<br />
                    2、负责文案整理；<br />
                    3、负责企业宣传类设计；<br />
                    4、负责活动页面设计。<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">能力要求</h5>
                  <p className="ability-desc">
                    1、1年以上相关工作经验；<br />
                    2、具有良好的设计功底和审美底蕴；<br />
                    3、熟悉常用的原型和设计软件，如：Axure/skecth/Photoshop/ai等；<br />
                    4、熟练在网络上寻找资源文件；<br />
                    5、良好的学习能力、沟通能力、适应能力，责任心强，能承受一定的工作压力，有责任心，上进心和自我驱动力；<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">福利待遇</h5>
                  <p className="ability-desc">
                    1、薪资待遇：6-12K；<br />
                    2、节假日：按照国家法定执行；<br />
                    3、其它福利：团建，生日祝福，国内旅游等。
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">联系方式</h5>

                  <p className="ability-desc">
                    1、联系人：梁女士<br />
                    2、联系邮箱：hr@uwjx.com<br />
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img src="https://uwjx.oss-cn-hangzhou.aliyuncs.com/www.uwjx.com/jobs/ps.png" alt="ps" style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


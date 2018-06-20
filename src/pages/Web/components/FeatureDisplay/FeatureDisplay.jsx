import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const data = [
  {
    title: '实时监控',
    description:
      '在终端查看智能硬件的实时状态，这些状态数据，由智能硬件采集，然后通过GSM模块，实时回传到服务器。包括经纬度位置信息，温度值，电压电量，开关通断，运动速度，程序版本，信号强度，报警状态等一系列指定变量，可以根据业务场景，自由定制变量和协议。\n',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1RBTKi4rI8KJjy0FpXXb5hVXa-456-456.png',
  },
  {
    title: '报表追溯',
    description:
      '选择设备和时间范围后，查看在这段历史时间内，该设备的历史数据，包括温度、运动轨迹、电压变动等所以被采集的变量数据，并可以导出Excel或者PDF文件，作为交付凭证。\n',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1LN_Ai9_I8KJjy0FoXXaFnVXa-450-453.png',
  },
  {
    title: '轨迹回放',
    description:
      '选择设备和时间范围后，查看在这段历史时间内，该设备的运动轨迹，在地图上以轨迹路线的形式展示，一目了然，可以播放动画来查看设备运行的历程。\n',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1K3JmgOqAXuNjy1XdXXaYcVXa-450-450.png',
  },
  {
    title: '设备控制',
    description:
      '通过各终端，远程下发指令，由服务器传输到智能硬件；智能硬件经过解析后，按照指令内容，对设备进行控制操作；包括：远程开门，设置工作值，启动设备，关闭设备，设置继电器通断状态，远程升级等。\n',
    imgUrl:
      'https://img.alicdn.com/tfs/TB124gfiY_I8KJjy1XaXXbsxpXa-450-453.png',
  },
  {
    title: '角色权限',
    description:
      '基于角色的权限管理，便于企业对于不同用户的访问进行管控。创建角色后，赋予该角色指定路径和信息的查看、修改、添加、删除等操作权限。',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1s4T4i2DH8KJjy1XcXXcpdXXa-450-450.png',
  },
  {
    title: '报警管理',
    description:
      '对于不同的场景设置报警机制，如设备高、低温，设备异常运作，设备开门，设备低电压，设备进入指定区域等；指定报警推送方式，如：短信，微信，邮件，人工等；指定推送对象；',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1oEe3i8fH8KJjy1XbXXbLdXXa-453-453.png',
  },
];

export default class FeatureDisplay extends Component {
  static displayName = 'FeatureDisplay';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="feature-display" style={styles.container}>
        <div style={styles.items}>
          <Row gutter="20" wrap>
            {data.map((item, index) => {
              return (
                <Col key={index} xxs="24" s="12" l="8">
                  <div style={styles.item}>
                    <img src={item.imgUrl} style={styles.image} alt="" />
                    <h3 style={styles.title}>{item.title}</h3>
                    <p style={styles.description}>{item.description}</p>
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
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0 80px',
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    textAlign: 'center',
    padding: '0 30px',
    margin: '40px 0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  description: {
    fontSize: '13px',
    lineHeight: '22px',
    color: '#999',
  },
};

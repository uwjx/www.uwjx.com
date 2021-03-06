import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Slider } from '@icedesign/base';

const slides = [
  {
    url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
    text: '手机淘宝皮肤征集',
  },
  {
    url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
    text: '阿里公益T恤设计大概',
  },
  {
    url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
    text: '淘公仔设计大赛',
  },
  {
    url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
    text: '磁带播放器换肤设计大赛',
  },
];

export default class SimpleSlider extends Component {
  static displayName = 'SimpleSlider';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer style={styles.baseDiv}>
        <Slider
          autoplay
          autoplaySpeed={1000}
        >
          {slides.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.text} style={styles.itemImg} />
            </div>
          ))}
        </Slider>
      </IceContainer>
    );
  }
}

const styles = {
  itemImg: {
    width: '100%',
  },
  baseDiv: {
    width: '100%',
    padding: '0px',
    margin: '0px',
    marginTop: '50px',
    backgroundColor: '#468eff',
  },
};

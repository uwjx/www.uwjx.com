import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '1920px',
    height: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'absolute',
    top: '112px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '40px',
    color: '#fff',
    pointerEvents: 'none',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '50px',
    lineHeight: '70px',
  },
  introBannerSubtitleStyles: {
    marginTop: '8px',
    marginBottom: '48px',
    maxWidth: '768px',
    fontSize: '16px',
    lineHeight: '25px',
  },
};

export default class IntroBanner extends Component {
    static displayName = 'IntroBanner';

    static propTypes = {
        href: PropTypes.string
    };

    static defaultProps = {
        value: 'string data'
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
          <div
            className="intro-banner-wrap"
            style={style.introBannerWrapStyles}>
            <img
              className="intro-banner-img"
              src="https://img.alicdn.com/tfs/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg"
              style={style.introBannerImgStyles}/>
            <div className="intro-banner-img-mask" style={style.introBannerImgMaskStyles}></div>
            <div className="intro-banner-text" style={style.introBannerTextStyles}>
              <h2 className="intro-banner-title" style={style.introBannerTitleStyles}>智慧系统，未来生活</h2>
              <p className="intro-banner-subtitle" style={style.introBannerSubtitleStyles}>将您的需求告诉我们，我们为您量身建设信息化系统平台。</p>
            </div>
          </div>
        );
    }
}

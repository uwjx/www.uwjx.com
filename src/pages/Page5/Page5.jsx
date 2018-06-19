import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import PlatformBlackIntro from './components/PlatformBlackIntro';
import PlatformIntro from './components/PlatformIntro';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import PriceInfo from './components/PriceInfo';
import RightContentDisplay from './components/RightContentDisplay';
import SlideBanner from './components/SlideBanner';
import TeamDisplay from './components/TeamDisplay';
import FooterLinks from './components/FooterLinks';

export default class Page5 extends Component {
  static displayName = 'Page5';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page5-page">
        <LandingIntroBanner />
        <PlatformBlackIntro />
        <PlatformIntro />
        <PlatformToolsIntro />
        <PriceInfo />
        <RightContentDisplay />
        <SlideBanner />
        <TeamDisplay />
        <FooterLinks />
      </div>
    );
  }
}

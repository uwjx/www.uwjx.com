import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';
import AblityItems from './components/AblityItems';
import ExcellentHomePage from './components/ExcellentHomePage';
import IntroTab from './components/IntroTab';
import LandingIntroBanner from './components/LandingIntroBanner';
import LeftContentDisplay from './components/LeftContentDisplay';
import PlatformIntro from './components/PlatformIntro';

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page4-page">
        <AbilityIntroduction />
        <AblityItems />
        <ExcellentHomePage />
        <IntroTab />
        <LandingIntroBanner />
        <LeftContentDisplay />
        <PlatformIntro />
      </div>
    );
  }
}

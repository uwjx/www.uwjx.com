import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExcellentHomePage from './components/ExcellentHomePage';
import PlatformIntro from './components/PlatformIntro';
import SlideBanner from './components/SlideBanner';
import IntroBanner from './components/IntroBanner';
import AblityItems from './components/AblityItems';
import AblityItems2 from './components/AblityItems2';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import CardItems from './components/CardItems';

export default class Solution extends Component {
  static displayName = 'Solution';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="solution-page">
        <Header />
        <ExcellentHomePage />
        <AblityItems />
        <AblityItems2 />
        <PlatformToolsIntro />
        <PlatformIntro />
        <IntroBanner />
        <SlideBanner />
        <CardItems />
        <Footer />
      </div>
    );
  }
}

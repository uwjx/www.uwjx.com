import React, { Component } from 'react';
import SimpleSlider from './components/SimpleSlider';
import PriceCard from './components/PriceCard';
import IntroBanner from './components/IntroBanner';
import FeatureDisplay from './components/FeatureDisplay';
import CardItems from './components/CardItems';
import BrandList from './components/BrandList';
import FooterInfo from './components/FooterInfo';

export default class Page3 extends Component {
  static displayName = 'Page3';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page3-page">
        <SimpleSlider />
        <PriceCard />
        <IntroBanner />
        <FeatureDisplay />
        <CardItems />
        <BrandList />
        <FooterInfo />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FeatureDisplay from './components/FeatureDisplay';
import ExcellentHomePage from './components/ExcellentHomePage';
import CardItems from './components/CardItems';

export default class Web extends Component {
  static displayName = 'Web';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="web-page">
        <Header />
        <ExcellentHomePage />
        <FeatureDisplay />
        <CardItems />
        <Footer />
      </div>
    );
  }
}

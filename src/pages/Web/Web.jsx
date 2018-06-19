import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LandingIntroBanner from './components/LandingIntroBanner';
import ExcellentHomePage from './components/ExcellentHomePage';

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
        <Footer />
      </div>
    );
  }
}

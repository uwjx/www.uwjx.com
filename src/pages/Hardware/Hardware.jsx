import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExcellentHomePage from './components/ExcellentHomePage';
import LeftContentDisplay from './components/LeftContentDisplay';
import RightContentDisplay from './components/RightContentDisplay';

export default class Hardware extends Component {
  static displayName = 'Hardware';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hardware-page">
        <Header />
        <ExcellentHomePage />
        <LeftContentDisplay />
        <RightContentDisplay />
        <Footer />
      </div>
    );
  }
}

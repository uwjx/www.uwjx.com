import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExcellentHomePage from './components/ExcellentHomePage';

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
        <Footer />
      </div>
    );
  }
}

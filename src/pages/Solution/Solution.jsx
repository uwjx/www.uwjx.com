import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExcellentHomePage from './components/ExcellentHomePage';

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
        <Footer />
      </div>
    );
  }
}

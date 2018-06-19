import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IntroTab from './components/IntroTab';
import ExcellentHomePage from './components/ExcellentHomePage';
import TeamDisplay from './components/TeamDisplay';

export default class Aboutus extends Component {
  static displayName = 'Aboutus';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="aboutus-page">
        <Header />
        <ExcellentHomePage />
        <IntroTab />
        <TeamDisplay />
        <Footer />
      </div>
    );
  }
}

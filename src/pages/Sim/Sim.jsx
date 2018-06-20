import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExcellentHomePage from './components/ExcellentHomePage';
import PriceCard from './components/PriceCard';


export default class Sim extends Component {
  static displayName = 'Sim';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sim-page">
        <Header />
        <ExcellentHomePage />
        <PriceCard />
        <Footer />
      </div>
    );
  }
}

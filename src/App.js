import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header-footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header-footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px",background: 'lightblue'}}>
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Highlight/>
        <Pricing/>
        <Location/>
        <Footer/>
      </div>
    );
  }
}

export default App;

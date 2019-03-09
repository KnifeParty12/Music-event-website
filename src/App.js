import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header-footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px",background: 'lightblue'}}>
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Highlight/>
      </div>
    );
  }
}

export default App;

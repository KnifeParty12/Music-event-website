import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header-footer/Header';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px",background: 'red'}}>
        <Header/>
      </div>
    );
  }
}

export default App;

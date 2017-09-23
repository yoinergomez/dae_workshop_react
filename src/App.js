import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import MercadoLibreAPI from './components/MercadoLibreAPI.js'

class App extends Component {
  render() {

    var queryItem = '';

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{queryItem}</h1>
        <input type="text"></input>
        <MercadoLibreAPI item='tv'></MercadoLibreAPI>
      </div>
    );
  }
}

export default App;

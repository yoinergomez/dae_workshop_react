import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import MercadoLibreAPI from './components/MercadoLibreAPI.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      queryItem: '',
    }
    this.searchItem = this.searchItem.bind(this)
  }

  searchItem(event) {
    var nameItem = event.target.value
    this.setState({queryItem: nameItem})
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.queryItem}</h1>
        <input type='text' onChange={this.searchItem} value={this.state.queryItem}/>
        <MercadoLibreAPI item='tv'></MercadoLibreAPI>
      </div>
    );
  }
}

export default App;

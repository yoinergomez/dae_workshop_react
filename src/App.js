import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Searcher from './components/Searcher.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itemsData: []
    }
    this.search = this.search.bind(this)
  }

  search(URL) {
    console.log(URL)
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          itemsData: d.results
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    var items = [];
    this.state.itemsData.forEach(function (product) {
      items.push(<p key={product.id}>{product.title}</p>)
    });



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Searcher search={this.search}></Searcher>
        <div>
          {items}
        </div>

      </div>
    );
  }
}

export default App;

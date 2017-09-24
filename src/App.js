import React, { Component } from 'react';

import './App.css';
import Searcher from './components/Searcher.js'
import ProductsItemList from './components/ProductsItemList.js'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itemsData: []
    }
    this.search = this.search.bind(this)
  }

  componentWillMount(){
    this.search('https://api.mercadolibre.com/sites/MCO/search?q=celular');
  }

  search(URL) {
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
          <h2>Welcome to React</h2>
          <Searcher search={this.search}></Searcher>
        </div>
        <ProductsItemList itemsData={this.state.itemsData}></ProductsItemList>
      </div>
    );
  }
}

export default App;

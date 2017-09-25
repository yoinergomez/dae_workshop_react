import React, { Component } from 'react';

import './App.css';
import Searcher from './components/Searcher.js'
import ProductsItemList from './components/ProductsItemList.js'
import { Jumbotron } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itemsData: []
    }
    this.search = this.search.bind(this)
  }

  componentWillMount() {
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

    var style_jumbo = {
      'background-color': '#ffdb15',
    }


    return (
      <div>
        <div className="header">
          <Jumbotron style={style_jumbo}>
            <div className="container">
              
              <h1><img src="http://4.bp.blogspot.com/-I5aipg4UF18/UksR7KQHTMI/AAAAAAAAAxg/4624KS9u7rY/s1600/mercadolibrelogo.png"/> <strong>MercadoSearch</strong> <small>@yoinergomez</small></h1>
              <Searcher search={this.search}></Searcher>
            </div>
          </Jumbotron>
        </div>
        <div>
          <ProductsItemList itemsData={this.state.itemsData}></ProductsItemList>
        </div>
      </div>
    );
  }

}

export default App;

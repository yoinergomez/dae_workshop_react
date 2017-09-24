import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Searcher extends Component {

    constructor(props) {
        super(props)
        this.createAjax = this.createAjax.bind(this)
    }


    render() {
        return (
            <div>
                <input type="text" ref="query" onChange={this.createAjax} />
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    }

    createAjax() {
        console.log('Work it!')
        var query    = ReactDOM.findDOMNode(this.refs.query).value;
        var URL      = 'https://api.mercadolibre.com/sites/MCO/search?q=' + query;
        this.props.search(URL)
    }
}
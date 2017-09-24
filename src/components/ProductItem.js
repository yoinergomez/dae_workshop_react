import React, { Component } from 'react';


export default class ProductItem extends Component {

    render() {
        var product = this.props.product
        return (
                <img src={product.thumbnail} alt={product.title} />
        );
    }

}

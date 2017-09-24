import React, { Component } from 'react';
import ProductItem from './ProductItem.js'

export default class ProductsItemList extends Component {

    render() {
        var resultItems = this.props.itemsData.map(function(product) {
            return <ProductItem key={product.id} product={product} />
        });
        return(
            <div>
                {resultItems}
            </div>           
        );
    }

}

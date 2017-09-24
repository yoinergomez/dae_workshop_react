import React, { Component } from 'react';
import ProductItem from './ProductItem.js'
import MasonryLayout from 'react-masonry-component'


export default class ProductsItemList extends Component {


    render() {
        var style = {
            margin: '6em 3% 19em 3%'
        };


        var resultItems = this.props.itemsData.map(function (product) {
            return <ProductItem key={product.id} product={product} />
        });
        return (
            <MasonryLayout
                style={style}>
                    { resultItems }
            </MasonryLayout>           
        );
}

}

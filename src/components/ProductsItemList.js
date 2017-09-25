import React, { Component } from 'react';
import ProductItem from './ProductItem.js';
import { Grid, Row } from 'react-bootstrap';


export default class ProductsItemList extends Component {


    render() {
        /* var style = {
            margin: '6em 3% 19em 3%'
        }; */


        var resultItems = this.props.itemsData.map(function (product) {
            return <ProductItem key={product.id} product={product} />
        });
        return (
            <Grid>
                <Row>
                    {resultItems}
                </Row>
            </Grid>
        );
    }

}

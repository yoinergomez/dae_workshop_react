import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';


export default class ProductItem extends Component {

    render() {
        var product = this.props.product
        var image = product.thumbnail.replace("-I", "-O")
        var price = product.price
        
        if (price) {
            price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        /* var style_h4 = {
            color: 'green',
        }

        var style_div_item = {
            margin: '10px 20px 20px 0',
            transition: '0.3s',
            'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
        }

        var style_description = {
            padding: '2px 16px',
            width: '50%'
        } */

        var style_h4 = {
            color: 'green',
        }

        return (
            <Col xs={6} md={4} className="text-center">
                <Thumbnail src={image}>
                    <h3><strong>{product.title}</strong></h3>
                    <h4 style={style_h4}><strong>$ {price}</strong></h4>
                    <p><strong>Sold: </strong> {product.sold_quantity}</p>
                </Thumbnail>
            </Col>
/*             <div>
                <img src={image} alt={product.title} />

                                <div style={style_description}>
                    <h3 style={style_h3}>{product.title}</h3>
                </div>

            </div>   */ 
        );
    }

}

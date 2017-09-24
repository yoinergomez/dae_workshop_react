import React, { Component } from 'react';


export default class ProductItem extends Component {

    render() {
        var product = this.props.product
        var image = product.thumbnail.replace("-I", "-O")

        var style_h3 = {
            color: 'blue',
            'word-wrap': 'break-word',
            width: '85%'
        }

        var style_div_item = {
            margin: '10px 20px 20px 0',
            transition: '0.3s',
            'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
        }

        var style_description = {
            padding: '2px 16px',
            width: '50%'
        }

        return (
            <div style={style_div_item}>
                <img src={image} alt={product.title} />
              
{/*                 <div style={style_description}>
                    <h3 style={style_h3}>{product.title}</h3>
                </div> */}
                
            </div>   
        );
    }

}

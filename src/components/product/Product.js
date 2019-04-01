import React, { Component } from 'react';
import Menu from './../layout/Menu';
import ContentProduct from './ContentProduct';

class Product extends Component {
    render() {
        return (
            <div>
                <Menu />
                <ContentProduct />
            </div>
        );
    }
}

export default Product;
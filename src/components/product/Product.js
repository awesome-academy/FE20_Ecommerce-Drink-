import React, { Component } from 'react';
import Menu from './../layout/Menu';
import ContentProduct from './ContentProduct';
import { Header, Footer } from '../layout';

class Product extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <ContentProduct />
                <Footer />
            </div>
        );
    }
}

export default Product;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddToCart, getDetail } from '../../actions/index';
import {  Link } from 'react-router-dom';

class BoxProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idproduct: this.props.data && this.props.data.id ? this.props.data.id : '',
            name: this.props.data && this.props.data.name ? this.props.data.name : '',
            price: this.props.data && this.props.data.price ? this.props.data.price : 0,
            oldprice: this.props.data && this.props.data.oldprice ? this.props.data.oldprice : 0,
            urlImage: this.props.data && this.props.data.urlImage ? this.props.data.urlImage : '',
            quantity: 1,
            status: false
        }
    }

    onSubmit() {
        alert('Add to cart successfully');
        this.props.onAddToCart(this.state);

    }
    render() {
        return (
            <div className="col-lg-4">
                <div className="product__card">
                    <div className="product__card__img"><img src={this.props.data.urlImage} alt="ruou vang da lat" /></div>
                    <div className="newproduct__card__vote">
                        <div className="row">
                            <div className="col-lg-6"><i className="fas fa-heart">   yêu thích</i></div>
                            <div className="col-lg-6"><i className="far fa-chart-bar">   so sánh</i></div>
                        </div>
                    </div>
                    <div className="product__card__infor">
                        <h3 >
                            <Link to={"/product/" + this.props.data.id}>{this.props.data.name}</Link>
                        </h3>
                        <h5>{this.props.data.price}<sup>đ
                        <del>- {this.props.data.oldprice}<sup>đ</sup></del></sup></h5>
                        <button className="button" onClick={() => this.onSubmit()}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        product: state.product,
    };
};
export default connect(mapStateToProps, { onAddToCart, getDetail })(BoxProduct);

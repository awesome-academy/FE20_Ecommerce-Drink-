import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemHotProduct extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="hotproduct__card">
                    <div className="hotproduct__card__img"><img src={this.props.data.urlImage} alt="ruou vang da lat" /></div>
                    <div className="hotproduct__card__infor">
                        <h3>{this.props.data.name}</h3>
                        <h5>{this.props.data.price}<sup>đ
                        <del>- {this.props.data.oldprice}<sup>đ</sup></del></sup></h5>
                        <Link
                            to={{
                                pathname: "/detailproduct",
                                search: "?product",
                                hash: `${this.props.data.id}`,
                                state: { fromDashboard: true }
                            }}
                        >
                            <button
                                className="button"
                            >Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemHotProduct;
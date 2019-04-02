import React, { Component } from 'react';

class ItemListProduct extends Component {
    render() {
        return (
            <div className="product--list__card">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product--list__card__img"><img src={this.props.data.urlImage}  alt="ruou vang da lat" /></div>
                    </div>
                    <div className="col-lg-8">
                      <div className="product--list__card__infor">
                        <h3>    {this.props.data.name}</h3>
                        <h5>    {this.props.data.price}<sup>đ</sup></h5>
                        <p>    {this.props.data.discMin}</p>
                      </div>
                      <div className="product--list__card__vote">
                        <div className="row">
                          <div className="col-lg-6">
                            <button className="button">add to cart </button>
                          </div>
                          <div className="col-lg-3"><i className="fas fa-heart">   Yêu thích</i></div>
                          <div className="col-lg-3"><i className="far fa-chart-bar">   So sánh</i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>
                </div>
        );
    }
}

export default ItemListProduct;
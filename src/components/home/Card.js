import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="newproduct__card">
                    <div className="newproduct__card__img">
                        <img src={this.props.data.urlImage}  alt="ruou vang da lat" /></div>
                    <div className="newproduct__card__tag--sale">
                        <div className="newproduct__card__tag--span"><span>Sale</span></div>
                    </div>
                    <div className="newproduct__card__vote">
                        <div className="row">
                            <div className="col-lg-6"><i className="fas fa-heart">   yêu thích</i></div>
                            <div className="col-lg-6"><i className="far fa-chart-bar">   so sánh</i></div>
                        </div>
                    </div>
                    <div className="newproduct__card__infor">
                        <h3>{this.props.data.name}</h3>
                        <h5>{this.props.data.price}<sup>đ
                  <del>- {this.props.data.oldprice}<sup>đ</sup></del></sup></h5>
                        <button className="button">add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
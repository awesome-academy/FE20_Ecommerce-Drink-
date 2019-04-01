import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class DescriptionProduct extends Component {
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    render() {
        return (
            <div className="detailproduct__describition">
                <h2>{this.props.data.name}</h2><img src="./../image/titleleft-dark.png" alt="true" />
                <h5>{this.props.data.price}<sup>đ</sup></h5>
                <hr />
                <StarRatings
                    rating={this.props.data.rating}
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="25px"
                    starSpacing="5px"
                />
                <i> 1 Review(S) | Add Your Review</i>
                <hr />
                <h4>Màu sắc</h4><span className="yelow" /><span className="black" /><span className="red" />
                <h4>kích cỡ</h4>
                <button className="buttondrop">Loại to    <i className="fas fa-sort-down" /></button>
                <h4>số lượng</h4>
                <button className="buttonplus"><i className="fas fa-minus" /><span>3</span><i className="fas fa-plus" /></button>
                <button className="button">add to cart</button>
                <div className="product__describition__vote">
                    <div className="row">
                        <div className="col-lg-4"><i className="fas fa-heart">   Yêu thích</i></div>
                        <div className="col-lg-4"><i className="far fa-chart-bar">   So sánh</i></div>
                        <div className="col-lg-4"><i className="fas fa-envelope">     Email</i></div>
                    </div>
                </div>
                <h4>mô tả</h4>
                <p>Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ oxy hóa của protein béo.</p><img src="./../image/share.png" alt="true" />
            </div>
        );
    }
}
export default DescriptionProduct;
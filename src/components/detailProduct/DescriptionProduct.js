import React, { Component } from 'react';

class DescriptionProduct extends Component {
    showRaiting(rating) {
       var result =[];
       for(var i = 1; i <= rating ; i++){
           result.push(<i className="fas fa-star" />);
       }
       for (var j = 1;j <= (5-rating) ; j++){
           result.push(<i className="far fa-star" />);
       }       
       return result;
    }
    render() {
        const rating = this.props.data.rating;
        return (
            <div className="detailproduct__describition">
                <h2>{this.props.data.name}</h2><img src="./../image/titleleft-dark.png" alt="true" />
                <h5>{this.props.data.price}<sup>đ</sup></h5>
                <hr></hr>
                {this.showRaiting(rating)}
                <i> 1 Review(S) | Add Your Review</i>
                <hr></hr>
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
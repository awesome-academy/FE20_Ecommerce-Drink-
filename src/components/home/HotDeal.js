import React, { Component } from 'react';

class HotDeal extends Component {
    render() {
        return (
            <div className="hotdeal" id="hotdeal">
                <div className="container">
                    <div className="hotdeal__banner"><img className="imgbanner" src="./../image/hotdeal.jpg" alt="" />
                        <div className="hotdeal__banner__box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hotdeal__banner__box__img">
                                        <div className="hotdeal__banner__box__img--hin"><img src="./../image/hotdeal_box.png" alt="hotdeal_box" />
                                        </div>
                                    </div>
                                    <div className="hotdeal__banner__box__img--tag"><span>Sale</span><img src="./../image/sale.png" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hotdeal__banner__box__infor">
                                        <h2>rượu nho năm 1987</h2><img src="./../image/titleleft-dark.png" alt="" />
                                        <h5>330.000<sup>đ</sup></h5>
                                        <button className="button">add to cart</button>
                                        <p>
                                            Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ.
                                            Resveratro còn có khả năng ngăn chặn mật độ oxy hóa của protein béo.
                                        </p>
                                        </p>
                                        <div className="hotdeal__banner__box__infor__table">
                                            <div className="hotdeal__banner__box__infor__table--item">
                                                <h4>334</h4>
                                                <h5>ngày</h5>
                                            </div>
                                            <div className="hotdeal__banner__box__infor__table--item">
                                                <h4>26</h4>
                                                <h5>giờ</h5>
                                            </div>
                                            <div className="hotdeal__banner__box__infor__table--item">
                                                <h4>60</h4>
                                                <h5>phút </h5>
                                            </div>
                                            <div className="hotdeal__banner__box__infor__table--item">
                                                <h4>15</h4>
                                                <h5>giây</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HotDeal;
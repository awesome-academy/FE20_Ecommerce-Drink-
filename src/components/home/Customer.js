import React, { Component } from 'react';

class Customer extends Component {
    render() {
        return (
            <div className="customer" id="customer">
                <div className="container">
                    <h1 className="title">Khách hàng</h1><img src="./../image/title_dark.png" alt="title_dark" />
                    <div className="customer__icon"><i className="fas fa-quote-right"></i></div>
                    <p>
                        Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                        rượu nhẹ, bột ga đầy trắng mịn.
                        Van nổ Thăng Long ...
                    </p>
                    </p>
                    <a href="/">Read more</a>
                    <div className="customer__card">
                        <div className="customer__card__img"><img src="./../image/avatar_1.png" alt="avatar" /></div>
                        <div className="customer__card__infor">
                            <h3>giang lt</h3><i>Graphic design</i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customer;
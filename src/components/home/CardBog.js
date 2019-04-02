import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardBog extends Component {
    render() {
        return (
            <div className="blog__card">
            <div className="blog__card__img">
                <div className="blog__card__overload"><img src="./../image/blog_1.png" alt="" />
                    <div className="blog__card__hover">
                        <div className="icon"><i className="fas fa-link"></i></div>
                    </div>
                </div>
            </div>
            <div className="blog__card__infor">
                <h2>Vang thang Long classNameic</h2><span>Đăng bởi Giangle | 30/06/2015 | 60 bình luận</span>
                <p>
                    Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                    rượu nhẹ, bột ga đầy trắng mịn.
                    Van nổ Thăng Long ...
                            </p>
                <Link to="/detailblog">Read more</Link>
            </div>
        </div>
        );
    }
}

export default CardBog;
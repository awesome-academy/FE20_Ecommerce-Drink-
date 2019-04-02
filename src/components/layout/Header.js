import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {
    render() {
        return (
            <div>
                <header className="header header-intro" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="header__menu">
                                    <ul>
                                        <li><Link to="/">Tài khoản của tôi</Link></li>
                                        <li><Link to="/order">Trạng thái đơn hàng</Link></li>
                                        <li><Link to="/">Danh sách ưa thích</Link></li>
                                        <li><Link to="/cart">Giỏ hàng</Link></li>
                                        <li><Link to="/login">Đăng nhập</Link></li>
                                        <li><Link to="/register">Đăng ký</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="header__search">
                                    <input type="text" name="search" placeholder="Tìm kiếm ở đây ..." /><i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default header;
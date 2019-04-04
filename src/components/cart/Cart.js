import React, { Component } from 'react';
import Menu from '../layout/Menu';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListCart } from '../../actions/index';

class Cart extends Component {
    componentDidMount(){
        this.props.getListCart();
    }
    render() {
        let itemCart = this.props.data.map(data => (
            <ItemCart key={data.id} data={data} />
        ));
        return (
            <div>
                <Menu />
                <div className="cart" id="cart">
                    <div className="container">
                        <div className="cart__title">
                            <p><Link to="/">Trang chủ/</Link>
                                <Link to="/product">Sản phẩm/<span>Giỏ hàng</span></Link></p>
                            <h3>Giỏ hàng</h3><img src="./../image/titleleft-dark.png" alt="" />
                        </div>
                        <div className="cart__table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Ảnh</th>
                                        <th>tên sản phẩm</th>
                                        <th>giá</th>
                                        <th>số lượng</th>
                                        <th>tổng số</th>
                                        <th>xóa</th>
                                    </tr>
                                    {itemCart}
                                </tbody>
                            </table>
                        </div>
                        <div className="cart__btn">
                            <button className="button"><Link to="/product">tiếp tục mua hàng</Link></button>
                            <button className="button">Xóa</button>
                            <button className="button">thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.cart.all,
    }
}
export default connect(mapStateToProps, { getListCart })(Cart);
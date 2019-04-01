import React, { Component } from 'react';
import ItemMenu from './ItemMenu';
import { connect } from 'react-redux';
import { getMenu } from '../../actions/index';

class MenuProduct extends Component {
    componentDidMount() {
        this.props.getMenu()
    }
    render() {
        let itemMenu = this.props.data.map(data => (
            <ItemMenu key={data.id} data={data} />
        ));
        let itemMenu2=   this.props.data.slice(0,6).map(data => (
            <ItemMenu key={data.id} data={data} />
        ));
        return (
            <div className="product__menu">
                <div className="product__menu__title">
                    <h3>danh mục sản phẩm</h3><img src="./../image/titleleft-dark.png" alt="" />
                </div>
                <nav className="product__menu__list">
                    <ul>
                        <li>
                            <h4>rượu ngoại</h4>
                        </li>
                        {itemMenu}
                        <li>
                            <h4>rượu vang</h4>
                        </li>
                        {itemMenu2}
                    </ul>
                </nav>
                <div className="product__menu__title">
                    <h3>so sánh sản phẩm</h3><img src="./../image/titleleft-dark.png" alt="" />
                    <p>Bạn chưa có sản phẩm nào để so sánh</p>
                </div>
                <div className="product__menu__title">
                    <h3>tag sản phẩm</h3><img src="./../image/titleleft-dark.png" alt="" />
                </div>
                <div className="product__menu__a">
                    <a href="/">Đồng hồ</a>
                    <a href="/">Túi</a>
                    <br></br>
                    <br></br>
                    <a href="/">Phụ kiện</a>
                    <a href="/">Giày</a>
                    <a href="/">Sandal</a>
                    <a href="/">Áo sơ mi</a>
                    <br></br>
                    <br></br>
                    <a href="/">Nước hoa</a>
                    <a href="/">Trẻ em</a>
                    <a href="/">Thời trang nữ</a>
                </div>
                <div className="product__menu__banner"></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.product.menu,
    }
}

export default connect(mapStateToProps, { getMenu })(MenuProduct);
import React, { Component } from 'react';

import Menu from './../layout/Menu';
import MenuProduct from './MenuProduct';
import Paging from './Paging';
import ItemListProduct from './ItemListProduct';
import { connect } from 'react-redux';
import { getListAll } from '../../actions/index';

class ListProduct extends Component {
    componentDidMount() {
        this.props.getListAll()
    }
    render() {
        return (
            <div>
                <Menu />
                <div className="product" id="product">
                    <div className="container">
                        <div className="product__title">
                            <p><a href="index.html">Trang chủ/Sản phẩm/<span>Rượu vang đỏ</span></a></p>
                        </div>
                        <div className="product__banner" />
                        <div className="row">
                            <div className="col-lg-4">
                                <MenuProduct />
                            </div>
                            <div className="col-lg-8">
                                <Paging />
                                <div className="product--list">
                                    {
                                        this.props.data.slice(0, 4).map(data => (
                                            <ItemListProduct key={data.id} data={data} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.product.all,
    }
}
export default connect(mapStateToProps, { getListAll })(ListProduct);
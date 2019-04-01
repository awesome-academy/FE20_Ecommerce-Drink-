import React, { Component } from 'react';
import MenuProduct from './MenuProduct';
import Paging from './Paging';
import BoxProduct from './BoxProduct';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListAll } from '../../actions/index';

class ContentProduct extends Component {
    componentDidMount() {
        this.props.getListAll()
    }
    render() {
        let itemProduct = this.props.data.slice(0,9).map(data => (
            <BoxProduct key={data.id} data={data} />
        ));
        return (
            <div className="product" id="product">
                <div className="container">
                    <div className="product__title">
                        <p> <Link to="/">Trang chủ/<span>Sản phẩm</span></Link></p>
                    </div>
                    <div className="product__banner"></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <MenuProduct />
                        </div>
                        <div className="col-lg-8">
                            <Paging />
                            <div className="product__box">
                                <div className="row">
                                    {itemProduct}
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
export default connect(mapStateToProps, { getListAll })(ContentProduct);
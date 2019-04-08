import React, { Component } from 'react';
import Menu from '../layout/Menu';
import { Link } from 'react-router-dom';
import ImageProduct from './ImageProduct';
import DescriptionProduct from './DescriptionProduct';
import TagDetailProduct from './TagDetailProduct';
import HotProduct from '../home/HotProduct';
import { connect } from 'react-redux';
import { getDetail } from '../../actions/index';
import { Header, Footer } from '../layout';

class DetailProduct extends Component {
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <div className="detailproduct" id="detailproduct">
                    <div className="container">
                        <div className="detailproduct__title">
                            <p><Link to="/">Trang chủ/</Link>
                                <Link to="/product">Sản phẩm/<span>Rượu vang đỏ</span></Link></p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ImageProduct data={this.props.data} />
                            </div>
                            <div className="col-lg-6">
                                <DescriptionProduct data={this.props.data} />

                            </div>
                        </div>
                        <div className="detailproduct__infor">
                            <TagDetailProduct data={this.props.data} />
                        </div>
                        <HotProduct />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.product.del,
    }
}
export default connect(mapStateToProps, { getDetail })(DetailProduct);
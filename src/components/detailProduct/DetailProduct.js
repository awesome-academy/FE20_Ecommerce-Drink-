import React, { Component } from 'react';
import Menu from '../layout/Menu';
import { Link } from 'react-router-dom';
import ImageProduct from './ImageProduct';
import DescriptionProduct from './DescriptionProduct';
import TagDetailProduct from './TagDetailProduct';
import HotProduct from '../home/HotProduct';
import { connect } from 'react-redux';
import { getListAll } from '../../actions/index';

class DetailProduct extends Component {
    componentDidMount() {
        this.props.getListAll()
    }
    render() {
        let ImageProducts = this.props.data.slice(0, 1).map(data => (
            <ImageProduct key={data.id} data={data} />
        ));
        let DescriptionProducts = this.props.data.slice(0, 1).map(data => (
            <DescriptionProduct key={data.id} data={data} />
        ));
        let TagDetailProducts = this.props.data.slice(0, 1).map(data => (
            <TagDetailProduct key={data.id} data={data} />
        ));
        return (
            <div>
                <Menu />
                <div className="detailproduct" id="detailproduct">
                    <div className="container">
                        <div className="detailproduct__title">
                            <p><Link to="/">Trang chủ/</Link>
                                <Link to="/product">Sản phẩm/<span>Rượu vang đỏ</span></Link></p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                {ImageProducts}
                            </div>
                            <div className="col-lg-6">
                                {DescriptionProducts}
                            </div>
                        </div>
                        <div className="detailproduct__infor">
                            {TagDetailProducts}
                        </div>
                        <HotProduct />
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
export default connect(mapStateToProps, { getListAll })(DetailProduct);
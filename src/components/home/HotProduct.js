import React, { Component } from 'react';
import ItemHotProduct from './ItemHotProduct';
import { connect } from 'react-redux';
import { getListAll } from '../../actions/index';

class HotProduct extends Component {
    componentDidMount() {
        this.props.getListAll()
    }
    render() {
        let hotProduct = this.props.data.slice(0, 4).map(data => (
            <ItemHotProduct key={data.id} data={data} />
        ));
        return (
            <div className="hotproduct" id="hotproduct">
                <div className="container">
                    <div className="hotproduct__title">
                        <h1 className="title">Sản phẩm bán chạy</h1><img src="image/title_dark.png" alt="title_dark" />
                    </div>
                    <div className="row">
                        {
                            this.props.data.slice(0, 4).map(data => (
                                <ItemHotProduct key={data.id} data={data} />
                            ))
                        }
                        {hotProduct}
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
export default connect(mapStateToProps, { getListAll })(HotProduct);
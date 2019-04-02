import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getListAll } from '../../actions/index';

class NewProduct extends Component {
    componentDidMount() {
        this.props.getListAll()
    }
    render() {
        return (
            <div className="newproduct" id="newproduct">
                <div className="container">
                    <div className="newproduct__title">
                        <h1 className="title">Sản phẩm mới</h1><img src="./../image/title_dark.png" alt="title_dark" />
                    </div>
                    <div className="row">
                        {
                            this.props.data.slice(0, 4).map(data => (
                                <Card key={data.id} data={data} />
                            ))
                        }
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
export default connect(mapStateToProps, { getListAll })(NewProduct);
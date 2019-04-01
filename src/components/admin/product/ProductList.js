import React, { Component } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import ItemProduct from './ItemProduct';
import { connect } from 'react-redux';
import { getListAll, requestAddProduct, requestUpdateProduct } from './../../../actions/index';
import Pagination from '../../Pagination';
import ProductAdd from './ProductAdd';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            switch: 'LIST',
            dataEdit: {},
            edit: false
        }
        this.onChangePage = this.onChangePage.bind(this);

    }

    onChangerAdd = () => {
        this.setState({
            switch: 'FORM'
        })
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        this.props.getListAll();
    }
    onAdd = (data) => {
        this.props.requestAddProduct(data);
        this.setState({
            switch: 'LIST'
        })
    }
    onEdit = (id) => {
        var data = this.props.data.filter(data => data.id === id);
        if (data.length > 0) {
            this.setState({
                dataEdit: data[0],
                switch: "FORM",
                edit: true
            })
        }

    }
    onUpdate = (data) => {
        this.props.requestUpdateProduct(data);
        this.setState({
            switch: "LIST",
            edit: false
        })

    }
    render() {
        const itemproducts = this.state.pageOfItems.map(data => (
            <ItemProduct key={data.id} data={data} onEdit={this.onEdit} />
        ));
        const Product = () => {
            switch (this.state.switch) {
                case 'LIST':
                    return (
                        <div className="col-lg-10 tablelist">
                            <div className="row">
                                <div className="col-lg-10" >
                                    <h2>Product <span>List</span></h2>
                                </div>
                                <div className="col-lg-2" >
                                    <button className="btn btn-primary" onClick={this.onChangerAdd}>Add Product</button>
                                </div>
                            </div>
                            <hr />
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr align="center">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Delete</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemproducts}
                                </tbody>
                            </table>
                            <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
                        </div>
                    )
                case 'FORM':
                    return (
                        <ProductAdd onAdd={this.onAdd} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate} edit={this.state.edit}></ProductAdd>
                    )
                default:
                    return (
                        <h1>Error</h1>
                    )
            }
        }
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="row">
                        <Menu />
                        {Product()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.product.all,
        fetching: state.product.fetching
    }
}
export default connect(mapStateToProps, { getListAll, requestAddProduct, requestUpdateProduct })(ProductList);
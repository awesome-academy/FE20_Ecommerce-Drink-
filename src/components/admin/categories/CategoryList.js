import React, { Component } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import ItemCategory from './ItemCategory';
import { connect } from 'react-redux';
import { getMenu, requestAddCategory ,requestUpdateCategory} from '../../../actions/index';
import Pagination from '../../Pagination';
import CategoryAdd from './CategoryAdd';

class CategoryList extends Component {
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
    onAdd = (data) => {
        this.props.requestAddCategory(data);
        this.setState({
            switch: 'LIST'
        })

    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        this.props.getMenu();
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
        this.props.requestUpdateCategory(data);
        this.setState({
            switch: "LIST",
            edit: false
        })

    }
    render() {
        const itemcategories = this.state.pageOfItems.map(data => (
            <ItemCategory key={data.id} data={data}  onEdit={this.onEdit}/>
        ));
        const MenuProduct = () => {
            switch (this.state.switch) {
                case 'LIST':
                    return (
                        <div className="col-lg-10 tablelist">
                            <div className="row">
                                <div className="col-lg-10" >
                                    <h2>Category <span>List</span></h2>
                                </div>
                                <div className="col-lg-2" >
                                    <button className="btn btn-primary" onClick={this.onChangerAdd}>Add Category</button>
                                </div>
                            </div>
                            <hr />
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr align="center">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Delete</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemcategories}
                                </tbody>
                            </table>
                            <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
                        </div>
                    )
                case 'FORM':
                    return (
                        <CategoryAdd onAdd={this.onAdd} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate} edit={this.state.edit}/>
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
                        {MenuProduct()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.product.menu
    }
}

export default connect(mapStateToProps, { getMenu, requestAddCategory,requestUpdateCategory })(CategoryList);
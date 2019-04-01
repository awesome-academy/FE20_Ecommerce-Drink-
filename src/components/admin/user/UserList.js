import React, { Component } from 'react';
import Menu from '../Menu';
import Header from '../Header';
import ItemUser from './ItemUser';
import { connect } from 'react-redux';
import { getUsers, requestAddUser,requestUpdateUser } from './../../../actions/index';
import Pagination from '../../Pagination';
import UserAdd from './UserAdd';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            switch: 'LIST'
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
        this.props.getUsers()
    }
    onAdd = (data) => {
        this.props.requestAddUser(data);
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
        this.props.requestUpdateUser(data);
        this.setState({
            switch: "LIST",
            edit: false
        })

    }
    render() {
        const itemusers = this.state.pageOfItems.map(data => (
            <ItemUser key={data.id} data={data} onEdit={this.onEdit}/>
        ));
        const User = () => {
            switch (this.state.switch) {
                case 'LIST':
                    return (
                        <div className="col-lg-10 tablelist">
                            <div className="row">
                                <div className="col-lg-10" >
                                    <h2>User <span>List</span></h2>
                                </div>
                                <div className="col-lg-2" >
                                    <button className="btn btn-primary" onClick={this.onChangerAdd}>Add User</button>
                                </div>
                            </div>                            <hr />
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr align="center">
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Level</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemusers}
                                </tbody>
                            </table>
                            <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
                        </div>
                    )
                case 'FORM':
                    return (
                        <UserAdd onAdd={this.onAdd} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate} edit={this.state.edit}></UserAdd>
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
                        {User()}
                    </div>
                </div>
            </div>
        );

    }
}
const mapStateToProps = state => {
    return {
        data: state.users.user
    }
}

export default connect(mapStateToProps, { getUsers, requestAddUser ,requestUpdateUser})(UserList);
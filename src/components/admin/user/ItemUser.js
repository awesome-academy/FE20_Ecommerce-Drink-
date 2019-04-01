import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeleteUser } from '../../../actions/index';

class ItemUser extends Component {
    onDelete = (id) => {
        this.props.getDeleteUser(id);
    }
    onEdit = () => {
        this.props.onEdit(this.props.data.id)
    }
    render() {
        return (
            <tr className="odd gradeX" align="center">
                <td>{this.props.data.id}</td>
                <td>{this.props.data.firstName} {this.props.data.lastName}</td>
                <td>{(this.props.data.level === 0) ? "Admin" : "Member"}</td>
                <td>{this.props.data.email}</td>
                <td className="center"><button className="button_delete" onClick={() => this.onDelete(this.props.data.id)}>Delete</button></td>
                <td className="center"><button className="button_edit" onClick ={this.onEdit}>Edit</button></td>
            </tr>
        );
    }
}

export default connect(null, { getDeleteUser })(ItemUser);
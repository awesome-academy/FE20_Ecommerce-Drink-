import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeleteProduct } from '../../../actions/index';

class ItemProduct extends Component {
    onDelete = (id) => {
        this.props.getDeleteProduct(id);
    }
    onEdit = () => {
        this.props.onEdit(this.props.data.id)
    }
    render() {
        return (
            <tr className="odd gradeX" align="center">
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.price}</td>
                <td>{this.props.data.discMin}</td>
                <td className="center"><button className="button_delete" onClick={() => this.onDelete(this.props.data.id)}>Delete</button></td>
                <td className="center"><button className="button_edit" onClick={this.onEdit}>Edit</button></td>
            </tr>
        );
    }
}

export default connect(null, { getDeleteProduct })(ItemProduct);
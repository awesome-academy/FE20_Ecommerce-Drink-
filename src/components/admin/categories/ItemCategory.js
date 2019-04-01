import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeleteMenu } from '../../../actions/index';

class ItemCategory extends Component {
    onDelete = (id) => {
        this.props.getDeleteMenu(id);
    }
    onEdit = () => {
        this.props.onEdit(this.props.data.id)
    }
    render() {
        return (
            <tr className="odd gradeX" align="center">
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td className="center"><button className="button_delete" onClick={() => this.onDelete(this.props.data.id)}>Delete</button></td>
                <td className="center"><button className="button_edit" onClick={this.onEdit}>Edit</button></td>
            </tr>
        );
    }
}

export default connect(null, { getDeleteMenu })(ItemCategory);
import React, { Component } from 'react';
import { getDelete } from '../../actions/index';
import { connect } from 'react-redux';
class ItemCart extends Component {
    onDelete = (id) => {
        this.props.getDelete(id);
    }       

render() {
    const sum = this.props.data.price * this.props.data.quantity;
    return (
        <tr>
            <td><img src={this.props.data.urlImage} alt="" /></td>
            <td>{this.props.data.name}</td>
            <td>
                <p>{this.props.data.price}<sup>đ</sup></p>
            </td>
            <td>{this.props.data.quantity}</td>
            <td>
                <p>{sum}<sup>đ</sup></p>
            </td>
            <td><button onClick={() => this.onDelete(this.props.data.id)}><i className="fas fa-trash-alt"></i></button></td>
        </tr>
    );
}
}
export default connect(null, { getDelete })(ItemCart);
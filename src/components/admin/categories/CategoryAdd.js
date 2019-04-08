import React, { Component } from 'react';

class CategoryAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id : 0,
            name: this.props.dataEdit && this.props.dataEdit.name ? this.props.dataEdit.name : '',
        }
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.edit) {
            this.props.onUpdate(this.state);
        } else {
            this.props.onAdd(this.state);

        }
    }
    render() {
        return (
            <div className="col-lg-10 tablelist">
            <h2>Categories <span>Add</span></h2>
            <hr />
            <div className="col-lg-7">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Category Parent</label>
                        <select className="form-control">
                            <option value={0}>Please Choose Category</option>
                            <option value>Rượu vang</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category Name</label>
                        <input className="form-control" name="name" placeholder="Please Enter Category Name" value={this.state.name} onChange={this.onChanger} />
                    </div>
                    <button type="submit" className="btn btn-default">Category Add</button>
                    <button type="reset" className="btn btn-default">Reset</button>
                </form></div>
        </div>
        );
    }
}

export default CategoryAdd;
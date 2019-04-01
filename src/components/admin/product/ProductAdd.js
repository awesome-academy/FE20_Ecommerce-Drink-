import React, { Component } from 'react';
class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id : 0,
            name: this.props.dataEdit && this.props.dataEdit.name ? this.props.dataEdit.name : '',
            price: this.props.dataEdit && this.props.dataEdit.price ? this.props.dataEdit.price : 0,
            urlImage: this.props.dataEdit && this.props.dataEdit.urlImage ? this.props.dataEdit.urlImage : '',
            discMin: this.props.dataEdit && this.props.dataEdit.discMin ? this.props.dataEdit.discMin : '',
            discMax: this.props.dataEdit && this.props.dataEdit.discMax ? this.props.dataEdit.discMax : ''
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
                <h2>Product <span>{this.state.id !== '' ? 'Update' : 'Add'}</span></h2>
                <hr />
                <div className="col-lg-7" style={{ paddingBottom: '120px' }}>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Please Enter Username" value={this.state.name} onChange={this.onChanger} />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" className="form-control" name="price" placeholder="Please Enter Price" value={this.state.price} onChange={this.onChanger} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="text" className="form-control" rows={2} name="discMin" value={this.state.discMin} onChange={this.onChanger} />
                        </div>
                        <div className="form-group">
                            <label>Description-Max</label>
                            <textarea type="text" className="form-control" rows={3} name="discMax" value={this.state.discMax} onChange={this.onChanger} />
                        </div>

                        <button type="submit" className="btn btn-default" >{this.state.id !== '' ? 'Update' : 'Add'}</button>
                        <button type="reset" className="btn btn-default">Reset</button>
                    </form></div>
            </div>
        );
    }
}

export default (ProductAdd);
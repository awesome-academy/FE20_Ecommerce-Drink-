import React, { Component } from 'react';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id : 0,
            firstName: this.props.dataEdit && this.props.dataEdit.firstName ? this.props.dataEdit.firstName : '',
            lastName: this.props.dataEdit && this.props.dataEdit.lastName ? this.props.dataEdit.lastName : '',
            email: this.props.dataEdit && this.props.dataEdit.email ? this.props.dataEdit.email : '',
            level: this.props.dataEdit && this.props.dataEdit.level ? this.props.dataEdit.level : ''
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
            <h2>Users <span>Add</span></h2>
            <hr />
            <div className="col-lg-7">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" name="firstName" placeholder="Please Enter Username" value={this.state.firstName} onChange={this.onChanger}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="txtPass" placeholder="Please Enter Password" />
                    </div>
                    <div className="form-group">
                        <label>RePassword</label>
                        <input type="password" className="form-control" name="txtRePass" placeholder="Please Enter RePassword" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Please Enter Email" value={this.state.email} onChange={this.onChanger} />
                    </div>
                    <div className="form-group">
                        <label>User Level</label>
                        <label className="radio-inline">
                            <input name="level" defaultValue={1} defaultChecked type="radio" value={this.state.level} onChange={this.onChanger}/>Admin
                        </label>
                        <label className="radio-inline">
                            <input name="level" defaultValue={2} type="radio" value={this.state.level} onChange={this.onChanger}/>Member
                        </label>
                    </div>
                    <button type="submit" className="btn btn-default">User Add</button>
                    <button type="reset" className="btn btn-default">Reset</button>
                </form></div>
        </div>
        );
    }
}

export default UserAdd;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="col-lg-2">
                <div className="contentadmin__menu">
                    <div className="contentadmin__menu__avatar">
                        <img src="./../image/avatar_admin.png" alt ="avatar"/>
                        <h5>Name admin</h5>
                    </div>
                    <div className="contentadmin__menu_list">
                        <li>
                            <Link className="nav-link dropdown-toggle setting" to="/productlist" id="navbardrop" data-toggle="dropdown">
                                <i className="fas fa-glass-cheers" /> Product
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/productlist"><i className="fas fa-list" /> List</Link>
                                <Link className="dropdown-item" to="/productadd"><i className="fas fa-plus" /> Add</Link>
                            </div>
                        </li>
                        <li>
                            <Link className="nav-link dropdown-toggle setting" to="/categorylist" id="navbardrop" data-toggle="dropdown">
                                <i className="fa fa-fw fa-table" /> Categories
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/categorylist"><i className="fas fa-list" /> List</Link>
                                <Link className="dropdown-item" to="/categoryadd"><i className="fas fa-plus" /> Add</Link>
                            </div>
                        </li>
                        <li>
                            <Link className="nav-link dropdown-toggle setting" to="/orders" id="navbardrop" data-toggle="dropdown">
                                <i className="fa fa-fw fa-edit" /> Order
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/orders"><i className="fas fa-dollar-sign" /> Đã thanh toán</Link>
                                <Link className="dropdown-item" to="/orders"><i className="fas fa-check" /> Chưa thanh toán</Link>
                            </div>
                        </li>
                        <li>
                            <Link className="nav-link dropdown-toggle setting" to="/userlist" id="navbardrop" data-toggle="dropdown">
                                <i className="fas fa-users" /> Users
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/userlist"><i className="fas fa-list" /> List</Link>
                                <Link className="dropdown-item" to="/useradd"><i className="fas fa-plus" /> Add</Link>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
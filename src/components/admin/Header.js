import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header__admin">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__admin__logo">
                            <h1>Wine houre</h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header__admin__menu">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/admin">Dashboard</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="button_admin" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-lg-2">
                        <a className="nav-link dropdown-toggle setting" href="/" id="navbardrop" data-toggle="dropdown">
                            <i className="fas fa-user" />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/"><i className="fa fa-fw fa-user" /> Profile</a>
                            <a className="dropdown-item" href="/"><i className="fas fa-cogs" /> Setting</a>
                            <hr />
                            <a className="dropdown-item" href="/"><i className="fa fa-fw fa-power-off" /> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
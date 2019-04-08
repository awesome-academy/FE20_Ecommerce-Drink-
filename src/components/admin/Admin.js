import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';

class Admin extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="contentadmin">
                    <div className="row">
                       <Menu/>
                        <div className="col-lg-10 tablelist">
                            <div className="contentadmin_statistical">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="contentadmin_statistical__card">
                                            <h2>797</h2>
                                            <h5>PRODUCT</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="contentadmin_statistical__card">
                                            <h2>797</h2>
                                            <h5>PRODUCT</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="contentadmin_statistical__card">
                                            <h2>797</h2>
                                            <h5>PRODUCT</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contentadmin__chart">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Admin;
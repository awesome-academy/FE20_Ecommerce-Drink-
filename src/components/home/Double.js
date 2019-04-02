import React, { Component } from 'react';
import Blog from './Blog';
import Customer from './Customer';

class Double extends Component {
    render() {
        return (
            <div className="double" id="double">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Blog />
                        </div>
                        <div className="col-lg-4">
                           <Customer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Double;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paging extends Component {
 
    render() {
        return (
            <div className="product__paging">
                <div className="row">
                    <div className="col-lg-2">
                        <Link to="/product"><i className="fas fa-list"></i></Link>
                        <Link to="/listproduct"><i className="fas fa-th-list"></i></Link>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-6">
                        <ul>
                            <i className="fas fa-caret-left"></i>
                            <li><a href="/">1</a></li>
                            <li><a href="/">2</a></li>
                            <li><a href="/">3</a></li>
                            <li><a href="/">4</a></li>
                            <li><a href="/">5</a></li>
                            <i className="fas fa-caret-right"></i>
                        </ul>
                       
                    </div>
                </div>
            </div>
        );
    }
}
export default Paging;
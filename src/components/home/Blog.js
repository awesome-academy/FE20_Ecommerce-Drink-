import React, { Component } from 'react';
import CardBog from './CardBog';

class Blog extends Component {
    render() {
        return (
            <div className="blog blog--blog" id="blog">
                <div className="container">
                    <div className="hotproduct__title">
                        <h1 className="title">tin tức & blog</h1><img src="./../image/title_dark.png" alt="title_dark" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <CardBog />
                        </div>
                        <div className="col-lg-6">
                            <CardBog />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
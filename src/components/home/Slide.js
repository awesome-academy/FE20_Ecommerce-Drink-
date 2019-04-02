import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div className="banner" id="banner">
                <div className="banner__group">
                    <h2 className="banner__max">Rượu</h2>
                    <h3 className="banner__min">Vang Đỏ</h3>
                    <h4 className="banner__small">Since 1980</h4>
                </div>
            </div>
        );
    }
}

export default Slide;
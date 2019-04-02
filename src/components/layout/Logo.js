import React, { Component } from 'react';

class logo extends Component {
    render() {
        return (
            <div className="menu__logo">
                <div className="menu__logo__background"><img src="image/Vector Smart Object.png" alt="" /></div>
                <div className="menu__logo__text">
                    <h2>Wine hourse</h2>
                    <h4>Since 1980</h4><img src="image/logo.png" alt="logo" />
                </div>
            </div>
        );
    }
}

export default logo;
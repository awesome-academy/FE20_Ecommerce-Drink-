import React, { Component } from 'react';

class ItemMenu extends Component {
    render() {
        return (
            <li><a href="/">{this.props.data.name}</a></li>
        );
    }
}

export default ItemMenu;
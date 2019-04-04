import React, { Component } from 'react';

class Item_mega_menu extends Component {
    render() {
        return (
            <ul>
                <li>
                    <h3>{this.props.data.title}</h3>
                </li>
                <li><a href="/">{this.props.data.name1}</a></li>
                <li><a href="/">{this.props.data.name2}</a></li>
                <li><a href="/">{this.props.data.name3}</a></li>
                <li><a href="/">{this.props.data.name4}</a></li>
                <li><a href="/">{this.props.data.name5}</a></li>
                <li><a href="/">{this.props.data.name6}</a></li>
            </ul>
        );
    }
}

export default Item_mega_menu;
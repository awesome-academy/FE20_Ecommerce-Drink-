import React, { Component } from 'react';
import ItemStatic from './ItemStatic';

class StaticBlock extends Component {
    render() {
        return (
            <div className="staticblock" id="staticblock">
                <ItemStatic />
                <ItemStatic />
                <ItemStatic />
                <ItemStatic />
                <ItemStatic />
                <ItemStatic />
                <ItemStatic />
                <ItemStatic />
            </div>
        );
    }
}

export default StaticBlock;
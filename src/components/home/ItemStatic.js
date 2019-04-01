import React, { Component } from 'react';

class ItemStatic extends Component {
    render() {
        return (
            <div className="staticblock__box">
                <div className="staticblock__box__img"><img src={this.props.data.src} alt="staticblock" /></div>
                <div className="staticblock__box__describition">
                    <p>{this.props.data.yearn}</p>
                    <div className="staticblock__box__describition__hover">
                        <div className="overload">
                            <h1>{this.props.data.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemStatic;
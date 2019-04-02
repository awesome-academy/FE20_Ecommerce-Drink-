import React, { Component } from 'react';

class ItemStatic extends Component {
    render() {
        return (
            <div className="staticblock__box">
                <div className="staticblock__box__img"><img src="./../image/staticblock_1.png" alt="staticblock" /></div>
                <div className="staticblock__box__describition">
                    <p>1987</p>
                    <div className="staticblock__box__describition__hover">
                        <div className="overload">
                            <h1>rượu</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemStatic;
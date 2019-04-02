import React, { Component } from 'react';
import Slide from './Slide';
import Menu from './../layout/Menu';
import Introduce from './Introduce';
import HotDeal from './HotDeal';
import NewProduct from './NewProduct';
import StaticBlock from './StaticBlock';
import HotProduct from './HotProduct';
import Double from './Double';

class Home extends Component {
    render() {
        return (
            <div>
                <Slide />
                <Menu />
                <Introduce />
                <HotDeal />
                <NewProduct />
                <StaticBlock />
                <HotProduct />
                <Double />
            </div>
        );
    }
}

export default Home;
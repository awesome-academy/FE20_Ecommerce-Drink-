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
    constructor(props){
        super(props);
        this.state={
            data : [
                {id:'1',yearn:'1987',name:'rượu',src:'./../image/staticblock_1.png'},
                {id:'2',yearn:'1987',name:'rượu',src:'./../image/staticblock_2.jpg'},
                {id:'3',yearn:'1987',name:'rượu',src:'./../image/staticblock_3.png'},
                {id:'4',yearn:'1987',name:'rượu',src:'./../image/staticblock_4.png'},
                {id:'5',yearn:'1987',name:'rượu',src:'./../image/staticblock_5.png'},
                {id:'6',yearn:'1987',name:'rượu',src:'./../image/staticblock_6.png'},
                {id:'7',yearn:'1987',name:'rượu',src:'./../image/staticblock_7.png'},
                {id:'8',yearn:'1987',name:'rượu',src:'./../image/staticblock_8.png'},
            ]
        }
    }
    render() {
        return (
            <div className="staticblock" id="staticblock">
                {this.state.data.map(data=>(
                     <ItemStatic key={data.id} data={data}  ></ItemStatic>
                ))}
            </div>
        );
    }
}

export default StaticBlock;
import React, { Component } from 'react';

class mega_menu extends Component {
import Item_mega_menu from './Item_mega_menu';

class Mega_menu extends Component {
    constructor(props){
        super(props);
        this.state={
            data : [
                {id:'1',title:'rượu ngoại',name1:'Rượu Chivar',name2:'Hàng độc - rượu đọc đáo',name3:'Johnnie Walker',name4:'Rượu Whisky',name5:'Rượu Reni Martin',name6:'Rượu Glenmorangie'},
                {id:'2',title:'rượu vang đỏ',name1:'Rượu Chivar',name2:'Hàng độc - rượu đọc đáo',name3:'Johnnie Walker',name4:'Rượu Whisky',name5:'Rượu Reni Martin',name6:'Rượu Glenmorangie'},
                {id:'3',title:'rượu vang trắng',name1:'Rượu Chivar',name2:'Hàng độc - rượu đọc đáo',name3:'Johnnie Walker',name4:'Rượu Whisky',name5:'Rượu Reni Martin',name6:'Rượu Glenmorangie'},
            ]
        }
    }
    render() {
        return (
            <div className="dropdown__mega"><i class="fas fa-caret-up"></i>
                <div className="mega__infor">
                    <ul>
                        <li>
                            <h3>rượu ngoại</h3>
                        </li>
                        <li><a href="/">Rượu Chivar</a></li>
                        <li><a href="/">Hàng độc - rượu đọc đáo</a></li>
                        <li><a href="/">Johnnie Walker</a></li>
                        <li><a href="/">Rượu Whisky</a></li>
                        <li><a href="/">Rượu Reni Martin</a></li>
                        <li><a href="/">Rượu Glenmorangie</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>rượu ngoại</h3>
                        </li>
                        <li><a href="/">Rượu Chivar</a></li>
                        <li><a href="/">Hàng độc - rượu đọc đáo</a></li>
                        <li><a href="/">Johnnie Walker</a></li>
                        <li><a href="/">Rượu Whisky</a></li>
                        <li><a href="/">Rượu Reni Martin</a></li>
                        <li><a href="/">Rượu Glenmorangie</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>rượu ngoại</h3>
                        </li>
                        <li><a href="/">Rượu Chivar</a></li>
                        <li><a href="/">Hàng độc - rượu đọc đáo</a></li>
                        <li><a href="/">Johnnie Walker</a></li>
                        <li><a href="/">Rượu Whisky</a></li>
                        <li><a href="/">Rượu Reni Martin</a></li>
                        <li><a href="/">Rượu Glenmorangie</a></li>
                    </ul>
                   {this.state.data.map(data=>(
                     <Item_mega_menu key={data.id} data={data}  ></Item_mega_menu>
                ))}
                </div>
                <div className="mega__img"><img src="../image/mega.png" alt="" /></div>
            </div>
        );
    }
}

export default Mega_menu;

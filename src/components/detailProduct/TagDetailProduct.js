import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class TagDetailProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={this.state.key}
                        onSelect={key => this.setState({ key })}
                    >
                        <Tab className="detailproduct__infor__tag" eventKey="home" title="Đặc điểm nổi bật">
                            <div className="detailproduct__infor__text">
                                <p>
                                    {this.props.data.discMax}
                                </p>
                            </div>

                        </Tab>
                        <Tab className="detailproduct__infor__tag" eventKey="profile" title="Thông tin sản phẩm">
                            <div className="detailproduct__infor__text">
                                <p>
                                    {this.props.data.discMin}
                                </p>
                            </div>
                        </Tab>
                        <Tab className="detailproduct__infor__tag" eventKey="contact" title="Đánh giá">
                            <div className="detailproduct__infor__text">
                                <p>
                                    {this.props.data.discMin}
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-lg-6">
                    <div className="detailproduct__infor__img"><img src="./../image/staticblock_6.png" alt="true" />
                        <h1>Rượu nho</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default TagDetailProduct;
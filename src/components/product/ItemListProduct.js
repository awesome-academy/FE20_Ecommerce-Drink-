import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddToCart} from '../../actions/index';
// import { Redirect } from 'react-router-dom';

class ItemListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idproduct: this.props.data && this.props.data.id ? this.props.data.id : '',
      name: this.props.data && this.props.data.name ? this.props.data.name : '',
      price: this.props.data && this.props.data.price ? this.props.data.price : 0,
      urlImage: this.props.data && this.props.data.urlImage ? this.props.data.urlImage : '',
      quantity: 1,
      status: false
    }
  }
  onSubmit() {
    alert('Add to cart successfully');
    this.props.onAddToCart(this.state);

  }
  render() {
    // if (this.state.status) {
    //   return (
    //     <Redirect to="/detailproduct"></Redirect>
    //   )
    // }
    return (
      <div className="product--list__card">
        <div className="row">
          <div className="col-lg-4">
            <div className="product--list__card__img"><img src={this.props.data.urlImage} alt="ruou vang da lat" /></div>
          </div>
          <div className="col-lg-8">
            <div className="product--list__card__infor">
              <h3>    {this.props.data.name}</h3>
              <h5>    {this.props.data.price}<sup>đ</sup></h5>
              <p>    {this.props.data.discMin}</p>
            </div>
            <div className="product--list__card__vote">
              <div className="row">
                <div className="col-lg-6">
                  <button className="button" onClick={() => this.onSubmit()}>add to cart </button>
                </div>
                <div className="col-lg-3"><i className="fas fa-heart">   Yêu thích</i></div>
                <div className="col-lg-3"><i className="far fa-chart-bar">   So sánh</i></div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps, { onAddToCart})(ItemListProduct);
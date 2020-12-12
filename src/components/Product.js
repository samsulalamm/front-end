import React, {Component} from 'react';
import watch from "../temp/watch.jpg";
import "../assets/scss/product.scss";
import {Link} from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <div className="product">
        <Link to="/" className="product-thumb">
          <img src={watch} alt=""/>
        </Link>

        <div className="product-desc">
          <h4 className="product-title"><Link to="/">Grooms Prep Kit For Wedding Photo</Link></h4>
          <p className="date"><em>Created at : </em> 10 Jan, 2020</p>

          <div className="product-attr">
            <div className="attr">
              <span className="attr-title">SKU</span>
              <span className="attr-value">123</span>
            </div>
            <div className="attr">
              <span className="attr-title">Retail Price</span>
              <span className="attr-value">৳ 100.00</span>
            </div>
            <div className="attr">
              <span className="attr-title">Sale Price</span>
              <span className="attr-value">৳ 120.00</span>
            </div>
            <div className="attr">
              <span className="attr-title">Lowest Price</span>
              <span className="attr-value">৳ 99.00</span>
            </div>
            <div className="attr">
              <span className="attr-title">Availbale</span>
              <span className="attr-value">20</span>
            </div>
            <div className="attr">
              <span className="attr-title">Status</span>
              <span className="attr-value">20</span>
            </div>
          </div>
        </div>

        <div className="actions">
          <Link to={'/products/details/123'} className="btn-action btn-block">View</Link>
          <Link to={'/'} className="btn-action btn-block btn-outline-primary">Edit</Link>
          <button  className="btn-action btn-block btn-outline-warning">Block</button>
          <button  className="btn-action btn-block btn-outline-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default Product;

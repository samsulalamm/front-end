import React, {Component} from 'react';
import '../assets/scss/customer-card.scss';

class CustomerCard extends Component {
  render() {
    return (
      <div className="customer-card">
        <div className="avatar">
          <img src="https://github.com/thm/uinames/blob/master/uinames.com/api/photos/female/10.jpg?raw=true" alt=""/>
        </div>
        <div className="desc">
          <h4 className="name">Nurul Huda</h4>
          <p className="phone">+8801234567890</p>

          <div className="customer-attr">
            <div className="attr">
              <span className="attr-name">Total Purchase (৳)</span>
              <span className="attr-value">123,005</span>
            </div>

            <div className="attr">
              <span className="attr-name">Total Orders</span>
              <span className="attr-value">123</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerCard;

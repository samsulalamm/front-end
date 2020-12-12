import React, {Component} from 'react';
import "../assets/scss/delivery-progress-timeline.scss";

class DeliveryProgressTimeline extends Component {
  render() {
    return (
      <div className="delivery-progress-timeline">
        <span className="progress-line"/>

        <div className="timeline-inner">
          <div className="progress-block completed">
            <div className="date">12/03/2020</div>
            <div className="circle"/>
            <div className="text">
              <h4>Pending</h4>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>

          <div className="progress-block completed">
            <span className="date">12/03/2020</span>
            <div className="circle"/>
            <div className="text">
              <h4>Confirm</h4>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>

          <div className="progress-block">
            <div className="date">12/03/2020</div>
            <div className="circle"/>
            <div className="text">
              <h4>Processing</h4>
            </div>
          </div>

          <div className="progress-block">
            <div className="date">12/03/2020</div>
            <div className="circle"/>
            <div className="text">
              <h4>Picked</h4>
            </div>
          </div>

          <div className="progress-block">
            <div className="date">12/03/2020</div>
            <div className="circle"/>
            <div className="text">
              <h4>Shipped</h4>
            </div>
          </div>

          <div className="progress-block">
            <div className="date">12/03/2020</div>
            <div className="circle"/>
            <div className="text">
              <h4>Delivered</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryProgressTimeline;

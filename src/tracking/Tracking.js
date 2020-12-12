import React, {Component} from 'react';
import App from "../App";
import {Button, Col, Form, Row} from "react-bootstrap";
import DeliveryProgressTimeline from "../components/DeliveryProgressTimeline";

class Tracking extends Component {
  render() {
    return (
      <App layout="boxed">
        <div className="main-content">
          <div className="card-block">
            <div className="block-body">
              <Form.Group as={Row} controlId="formName">
                <Form.Label column sm="3">
                  Request ID <span className="text-danger">*</span>
                </Form.Label>
                <Col sm="9" md={8} lg={7}>
                  <Form.Control type="text" placeholder="Request ID"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formName">
                <Form.Label column sm="3"/>
                <Col sm="9" md={8} lg={7}>
                  <Button variant={"primary"}>Track Now</Button>
                </Col>
              </Form.Group>
            </div>
          </div>

          <div className="card-block">
            <div className="block-header">
              <h3 className="block-title">Tracking for Request ID <span className="text-info">#EKABXY123</span></h3>
            </div>
            <div className="block-body">
              <DeliveryProgressTimeline/>
            </div>
          </div>
        </div>
      </App>
    );
  }
}

export default Tracking;

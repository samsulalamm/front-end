import React, {Component} from 'react';
import "../assets/scss/auth.scss";
import logo from '../assets/img/logo.png';
import Form from "react-bootstrap/esm/Form";
import {Button} from "react-bootstrap";
import {FiArrowLeft} from "react-icons/fi";
import {connect} from "react-redux";
import {login} from "../redux";
import {Redirect, withRouter} from "react-router-dom";
import {userIsLoggedin} from "../auth/authUtils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForgetPassword: false
    }
  }

  handleForgetPassword = () => {
    this.setState({isForgetPassword: true})
  };

  handleBackToLogin = () => {
    this.setState({isForgetPassword: false})
  };

  render() {
    if (userIsLoggedin())
      return (<Redirect to={{pathname: '/'}}/>);

    return (
      <div className="auth-wrap">
        <div className="auth-container">
          <div className="auth-header">
            <img className="logo" src={logo} alt="Raw Template"/>
            {!this.state.isForgetPassword ?
              <>
                <h4 className="auth-title">Login</h4>
                <p>to continue to admin panel</p>
              </> :
              <>
                <h4 className="auth-title">Reset Password</h4>
                <p>Enter your registered email address</p>
              </>
            }
          </div>

          <div className="auth-body">
            {!this.state.isForgetPassword ?
              <>
                <Form.Group controlId="loginForm.email">
                  <Form.Label className="sr-only">Email</Form.Label>
                  <Form.Control type="email" defaultValue="admin@admin.com" placeholder="Email address"/>
                </Form.Group>
                <Form.Group controlId="loginForm.password">
                  <Form.Label className="sr-only">Password</Form.Label>
                  <Form.Control defaultValue="123456" placeholder="Password"/>
                </Form.Group>
                <span
                  onClick={() => this.handleForgetPassword()}
                  className="d-block text-primary mb-3">Forget your password?</span>
                <Button variant="primary"
                        disabled={this.props.authData.loading}
                        onClick={() => this.props.login('', '', () => {
                          this.props.history.push('/');
                        })}
                        block>{this.props.authData.loading ? 'Logging...' : 'login'}</Button>
              </> :
              <>
                <Form.Group controlId="loginForm.email">
                  <Form.Label className="sr-only">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your registered email address"/>
                </Form.Group>
                <Button variant="primary" block>Reset Password</Button>
                <Button variant="link"
                        onClick={() => this.handleBackToLogin()}
                        block><FiArrowLeft/> Back to Login</Button>
              </>
            }
          </div>

          <div className="auth-footer text-center">
            &copy; 2020 Raw Template. All right reserved
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authData: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, cb) => dispatch(login(email, password, cb))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
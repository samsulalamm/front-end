import React, {Component} from 'react';
import '../assets/scss/header.scss';
import {Link, withRouter} from "react-router-dom";
import logo from "../assets/img/logo.png";
import blankAvatar from "../assets/img/blank-avatar.png";
import {FiLogOut, FiMenu, FiUser} from "react-icons/all";
import {connect} from "react-redux";
import {handleToggleNavbar, logout} from "../redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAccountDropdown: false
    }
  }

  handleToggleAccountDropdown = () => {
    this.setState({isShowingAccountDropdown: !this.state.isShowingAccountDropdown})
  };

  render() {
    console.log(this.props.navbar);

    return (
      <div className={this.props.navbar.isNavbarShowing ? 'header' : 'header collapsed-sidebar'}>
        <div className="header-brand">
          <Link to="/" className="brand-logo"><img src={logo} alt=""/></Link>
        </div>

        <div className="header-content">
          <div className="layout-actions">
            <button
              onClick={() => this.props.handleNavbarToggle()}
              className="sidebar-toggle"><FiMenu/></button>

            <Link to="/" className="brand-logo"><img src={logo} alt=""/></Link>
          </div>
          <div>
            <div className="mini-account">
              <button type="button"
                      onClick={() => this.handleToggleAccountDropdown()}
                      className="account-user">
                <div className="user-avatar">
                  <img src={blankAvatar} alt=""/>
                </div>
                <div className="user-name">Administrator</div>
              </button>

              {this.state.isShowingAccountDropdown &&
              <div className="account-dropdown">
                <Link to="/" className="dropdown-link"><span className="icon"><FiUser/></span> <span className="text">My Profile</span></Link>
                <span
                  onClick={() => this.props.logout(() => {
                    this.props.history.push('/login');
                  })}
                  className="dropdown-link"><span className="icon"><FiLogOut/></span> <span className="text">Logout</span></span>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: cb => dispatch(logout(cb)),
    handleNavbarToggle: () => dispatch(handleToggleNavbar())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

import React, {Component} from 'react';
import "../assets/scss/sidebar.scss";
import SidebarNav from "../components/SidebarNav";
import {connect} from "react-redux";

class Sidebar extends Component {
  render() {
    return (
      <div className={this.props.navbar.isNavbarShowing ? 'sidebar' : 'sidebar collapsed-sidebar'}>
        <SidebarNav/>

        <div className="sidebar-footer">
          <span>&copy; 2020 <span className="text-primary">Raw Template</span></span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navbar: state.navbar
  }
};

export default connect(mapStateToProps)(Sidebar);

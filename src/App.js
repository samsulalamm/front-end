import React from 'react';
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import {connect} from "react-redux";

function App({layout, children, navbar}) {
  return (
    <>
      <Header/>

      <div className={navbar.isNavbarShowing ? 'container-wrap' : 'container-wrap collapsed-sidebar'}>
        <Sidebar/>

        <div className="main-container">
          {layout !== 'boxed' ? children
            :
            <div className="layout-boxed">
              {children}
            </div>
          }

        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    navbar: state.navbar
  }
};

export default connect(mapStateToProps)(App);

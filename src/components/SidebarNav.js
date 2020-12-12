import React, {Component} from 'react';
import '../assets/scss/sidebar-nav.scss';
import {
  FiChevronDown,
  FiChevronUp,
  FiFileText, GoDashboard
} from "react-icons/all";
import {Link} from "react-router-dom";

class SidebarNav extends Component {
  state = {
    navBar: [
      {
        id: 1,
        text: 'Data Point',
        path: '/',
        icon: <GoDashboard/>,
      },
    ]
  };

  toggleSubNavItems = async (id) => {
    const navBar = {...this.state.navBar};
    const itemObj = await this.state.navBar.filter(obj => {
      return obj.id === id
    });
    const index = this.state.navBar.indexOf(itemObj[0]);
    navBar[index].isCollapsed = !navBar[index].isCollapsed;
    this.setState(navBar);
  };

  render() {
    return (
      <div className="sidebar-nav collapsed-sidebar">
        <ul className="navigation">
          {this.state.navBar.map((item, i) => {
            if (item.hasSubMenu) {
              return (
                <li key={i} className={item.isCollapsed ? 'has-sub-menu' : 'show-sub-menu has-sub-menu'}>
                  <span
                    onClick={() => this.toggleSubNavItems(item.id)}
                    className="toggleCollapse nav-link">
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">
                      <span className="text">{item.text}</span>
                      <span className="catet-icon">{item.isCollapsed ? <FiChevronDown/> : <FiChevronUp/>}</span>
                    </span>
                  </span>

                  <ul className="sub-menu">
                    {item.subMenu.map((subItem, i) => {
                      return (<li key={i}><Link className="nav-link" to={subItem.path}><span
                        className="nav-text">{subItem.text}</span></Link></li>)
                    })}
                  </ul>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link className="nav-link" to={item.path}>
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.text}</span>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    );
  }
}

export default SidebarNav;

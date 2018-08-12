import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/hammers.svg';
import mlh from '../../assets/images/mlh-badge.svg';
import './_pillar.nav.source.scss';

class Nav extends Component {
  render() {
    return (
      <div className="p-nav">
        <div className="p-nav_content">
          <div className="p-nav__logo">
            <Link to="/">
              <img
                src={logo}
                alt="BoilerMake logo"
                className="p-nav__logo--hammers"
              />
            </Link>
          </div>
          <nav className="p-nav__nav_links">
            <NavLink exact to="/hackers" className="p-nav__nav_link">
              Hackers
            </NavLink>
            <NavLink exact to="/sponsors" className="p-nav__nav_link">
              Sponsors
            </NavLink>
            <NavLink exact to="/about" className="p-nav__nav_link">
              About
            </NavLink>
            <NavLink exact to="/faq" className="p-nav__nav_link">
              FAQ
            </NavLink>
          </nav>
        </div>
        <a href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white">
          <div className="p-nav__mlh-badge">
            <img src={mlh} width="100%" height="auto" alt="mlh badge" />
          </div>
        </a>
      </div>
    );
  }
}

export default Nav;

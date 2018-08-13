import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logoutUser } from '../../actions/users';
import logo from '../../assets/images/hammers.svg';
import mlh from '../../assets/images/mlh-badge.svg';
import './_pillar.nav.source.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
  }

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
            {/* Had this in for testing */}
            {/* <a className="p-nav__nav_link" onClick={this.props.logoutUser}>
              Logout
            </a> */}
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

//now the redux integration layer
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

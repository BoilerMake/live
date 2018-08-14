import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logoutUser } from '../../actions/users';
import logo from '../../assets/images/hammers.svg';
import mlh from '../../assets/images/mlh-badge.svg';
import { Button } from 'bm-kit';
import './_pillar.nav.source.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      showing: false
    };
  }

  render() {
    const { showing } = this.state;

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
          <nav className="p-nav__nav_links--mobile">
            <span
              className="p-nav__dropdown_mobile"
              onClick={() => this.setState({ showing: !showing })}
            >
              Menu
              {showing ? (
                <div className="p-nav__dropdown_mobile--content">
                  <div className="p-nav__dropdown--account">
                    <NavLink
                      exact
                      to="/apply"
                      className="p-nav__dropdown_link--apply"
                    >
                      Apply
                    </NavLink>
                    <NavLink exact to="/login" className="p-nav__dropdown_link">
                      Login
                    </NavLink>
                  </div>
                  <hr />
                  <NavLink exact to="/faq" className="p-nav__dropdown_link">
                    FAQ
                  </NavLink>
                  <NavLink exact to="/hackers" className="p-nav__dropdown_link">
                    Hackers
                  </NavLink>
                  <NavLink
                    exact
                    to="/sponsors"
                    className="p-nav__dropdown_link"
                  >
                    Sponsors
                  </NavLink>
                  <NavLink exact to="/team" className="p-nav__dropdown_link">
                    Team
                  </NavLink>
                  <NavLink exact to="/about" className="p-nav__dropdown_link">
                    About
                  </NavLink>
                  <NavLink exact to="/slack" className="p-nav__dropdown_link">
                    Join our Slack
                  </NavLink>
                </div>
              ) : null}
            </span>
          </nav>

          <nav className="p-nav__nav_links">
            <div className="p-nav__dropdown">
              <NavLink exact to="/about" className="p-nav__nav_link">
                About ▾
              </NavLink>
              <div className="p-nav__dropdown_content">
                <NavLink exact to="/hackers" className="p-nav__dropdown_link">
                  Hackers
                </NavLink>
                <NavLink exact to="/sponsors" className="p-nav__dropdown_link">
                  Sponsors
                </NavLink>
                <NavLink exact to="/team" className="p-nav__dropdown_link">
                  Team
                </NavLink>
              </div>
            </div>
            <NavLink exact to="/faq" className="p-nav__nav_link">
              FAQ
            </NavLink>
            <NavLink exact to="/slack" className="p-nav__nav_link">
              Join our Slack
            </NavLink>
            <NavLink exact to="/login" className="p-nav__nav_link">
              Login
            </NavLink>
            <NavLink
              exact
              to="/apply"
              className="p-nav__nav_link p-nav__nav_link--apply"
            >
              Apply
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

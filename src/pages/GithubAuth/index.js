import React, { Component } from 'react';
import { parse } from 'qs';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { githubLogin } from '../../actions';
import { ALLOW_SIGNUPS } from '../../config';
import { authUserWithGithub } from '../../actions/users';

import './_pillar.github_auth.source.scss';

class GitHubAuth extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  render() {
    if (!ALLOW_SIGNUPS) return <h1>Signups not allowed!</h1>;
    if (this.props.user.me && this.props.user.me.github_user_id)
      return <Redirect to="/dashboard" />;
    const query = parse(this.props.location.search.substr(1));
    let { code } = query;

    if (code && !this.state.loading) {
      this.setState({ loading: true });
      this.props.authUserWithGithub(code);
    } else if (!code) {
      githubLogin();
    }
    if (this.props.user.showGithubEmailErrorMessage) {
      return (
        <div className="p-github_auth">
          <h1>Oops!</h1>
          <p>
            Your GitHub account doesn't have a public email associated, so we
            can't automagically make you an account.
            <br />
            Please go to{' '}
            <a
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/settings/profile
            </a>{' '}
            and pick an email to use, then click{' '}
            <Link to="/auth/github">here</Link>.<br />
            <br />
            Alternatively, create account with a password{' '}
            <Link to="/register">here</Link>
          </p>
        </div>
      );
    }
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
}

//now the redux integration layer
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  authUserWithGithub: code => {
    dispatch(authUserWithGithub(code));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHubAuth);

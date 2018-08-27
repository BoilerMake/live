import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import { Card } from 'bm-kit';
import apiFetch from '../../actions';
import './_pillar.login.source.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      errors: {},
      error: ''
    };
  }

  handleSubmit = (email, password) => {
    let d = new FormData();
    d.append('email', email);
    d.append('password', password);

    return apiFetch('users/login', {
      method: 'POST',
      body: d
    })
      .then(response => response.json())
      .then(json => {
        if (json.success === false) {
          // WTF is this janky code
          typeof json.message === 'object'
            ? this.setState({ errors: json.message, error: '' })
            : this.setState({ error: json.message, errors: {} });
        } else {
          this.props.loginFromJWT(json.data.token);
        }
      });
  };

  render() {
    if (this.props.user.authenticated)
      this.setState({ redirectToReferrer: true });
    const { from } = this.props.location.state || {
      from: { pathname: '/dashboard' }
    };

    if (this.state.redirectToReferrer) {
      //redirect them to the route they came from (or dashboard) on successful auth.
      return <Redirect to={from} />;
    }
    return (
      <div className="p-login">
        <div className="p-login__content">
          <Card className="col-6">
            <h1>Login</h1>
            <LoginForm
              onSubmit={this.handleSubmit}
              errors={this.state.errors}
              error={this.state.error}
            />
          </Card>
        </div>
      </div>
    );
  }
}

//now the redux integration layer
import { loginFromJWT } from '../../actions/users';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginFromJWT: token => {
    dispatch(loginFromJWT(token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

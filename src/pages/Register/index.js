import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';
import { Card } from 'bm-kit';
import apiFetch from '../../actions';
import { loginFromJWT } from '../../actions/users';
import { connect } from 'react-redux';

export class Register extends Component {
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
    return apiFetch('users/register', {
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
          // toastr.error('Registration error:', json.message.email[0] || ' ', json.message.password && json.message.password[0]);
          // throw new SubmissionError({ _error: json.message });
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
            <h1>Register</h1>
            <RegisterForm
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
)(Register);

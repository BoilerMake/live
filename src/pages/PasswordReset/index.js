import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router-dom';
import RequestPasswordResetForm from './RequestPasswordResetForm';
import PerformPasswordResetForm from './PerformPasswordResetForm';
import apiFetch from '../../actions';
import '../../assets/_form.scss';

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
  }
  handleRequestSubmit = values => {
    let d = new FormData();
    d.append('email', values.email);
    return apiFetch('users/reset/send', {
      method: 'POST',
      body: d
    })
      .then(response => response.json())
      .then(json => {
        if (json.success === false) {
          throw new SubmissionError({ _error: json.message });
        } else {
          this.setState({ message: json.data });
        }
      });
  };

  handlePerformSubmit = values => {
    if (values.password !== values.password2)
      throw new SubmissionError({ _error: "passwords don't match!" });
    let d = new FormData();
    d.append('password', values.password);
    d.append('token', this.props.match.params.reset_token);
    return apiFetch('users/reset/perform', {
      method: 'POST',
      body: d
    })
      .then(response => response.json())
      .then(json => {
        if (json.success === false) {
          throw new SubmissionError({ _error: json.message });
        } else {
          this.setState({ message: json.data });
        }
      });
  };

  render() {
    if (this.props.user.authenticated) return <Redirect to="/dashboard" />;

    let isTokenShowing = this.props.match.params.reset_token !== undefined;
    let requestReset = (
      <div>
        <p>Please enter your email.</p>
        <RequestPasswordResetForm onSubmit={this.handleRequestSubmit} />
      </div>
    );
    let performReset = (
      <div>
        <PerformPasswordResetForm onSubmit={this.handlePerformSubmit} />
      </div>
    );
    return (
      <div className="login">
        <h1 className="title center">Reset Your Password</h1>
        {isTokenShowing ? performReset : requestReset}
        <p>{this.state.message}</p>
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

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordReset);

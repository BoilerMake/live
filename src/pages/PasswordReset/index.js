import React, { Component } from 'react';
// import { SubmissionError } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Card } from 'bm-kit';
import RequestPasswordResetForm from './RequestPasswordResetForm';
import PerformPasswordResetForm from './PerformPasswordResetForm';
import apiFetch from '../../actions';
import '../../assets/_form.scss';
import { connect } from 'react-redux';

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  handleRequestSubmit = email => {
    let d = new FormData();
    d.append('email', email);
    return apiFetch('users/reset/send', {
      method: 'POST',
      body: d
    })
      .then(response => response.json())
      .then(json => {
        if (json.success === false) {
          //TODO: Handle errors?
          // throw new SubmissionError({ _error: json.message });
        } else {
          this.setState({ message: json.data });
        }
      });
  };

  handlePerformSubmit = (password, password2) => {
    if (password !== password2) {
      return;
      // throw new SubmissionError({ _error: "passwords don't match!" });
    }
    let d = new FormData();
    d.append('password', password);
    d.append('token', this.props.match.params.reset_token);
    return apiFetch('users/reset/perform', {
      method: 'POST',
      body: d
    })
      .then(response => response.json())
      .then(json => {
        if (json.success === false) {
          // throw new SubmissionError({ _error: json.message });
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
        <RequestPasswordResetForm onSubmit={this.handleRequestSubmit} />
      </div>
    );
    let performReset = (
      <div>
        <PerformPasswordResetForm onSubmit={this.handlePerformSubmit} />
      </div>
    );
    return (
      <div className="p-login">
        <div className="p-login__content">
          <Card className="col-6">
            <h1>Reset Your Password</h1>
            {isTokenShowing ? performReset : requestReset}
            <p>{this.state.message}</p>
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

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordReset);

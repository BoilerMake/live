import React, { Component } from 'react';
import { Button } from 'bm-kit';
import apiFetch from '../actions/index';

export class InterestSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      success: null,
      email: ''
    };
  }
  handleSubmit = event => {
    if (event) {
      //so tests don't get funky
      event.preventDefault();
      event.stopPropagation();
    }
    let d = new FormData();
    let email = this.state.email;
    d.append('email', email);
    return apiFetch('interest/signup', {
      method: 'POST',
      body: d
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ success: json.success });
        if (json.success === false) {
          this.setState({ message: json.message });
          let message = json.message;
          this.props.recordEvent('interestForm', 'submit_error', {
            message,
            email
          });
        } else {
          this.setState({ message: json.data });
          //upon success, clear the form.
          this.setState({ email: '' });
          this.props.recordEvent('interestForm', 'submit_success', { email });
        }
      });
  };
  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    let canSubmit = this.state.email.length > 3;
    return (
      <div>
        <label htmlFor="email">
          <p className="white">
            Sign up for updates on when applications open!
          </p>
        </label>
        <form className="interestForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.changeEmail.bind(this)}
            placeholder="Email"
          />
          <Button type="submit" disabled={!canSubmit}>
            Submit
          </Button>
          <p className="white">{this.state.message}</p>
        </form>
      </div>
    );
  }
}

//now the redux integration layer
import { recordEvent } from '../actions/users';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  recordEvent: (event, subtitle, context) => {
    dispatch(recordEvent(event, subtitle, context));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterestSignupForm);

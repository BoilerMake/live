import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Button, TextInput } from 'bm-kit';
import '../../assets/_form.scss';

class PerformPasswordResetForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      password2: ''
    };

    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handlePasswordConfirm(e) {
    this.setState({ password2: e.target.value });
  }

  render(props) {
    const { error, onSubmit } = this.props;
    console.log(error);
    const { password, password2 } = this.state;
    return (
      <div>
        <TextInput
          name="password"
          type="password"
          label="New Password"
          onChange={this.handlePassword}
        />
        <TextInput
          name="password2"
          type="password"
          label="Confirm New Password"
          onChange={this.handlePasswordConfirm}
        />
        {error && <strong>{error}</strong>}
        <Button type="submit" onClick={() => onSubmit(password, password2)}>
          Submit
        </Button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PerformPasswordResetForm' // a unique identifier for this form
})(PerformPasswordResetForm);

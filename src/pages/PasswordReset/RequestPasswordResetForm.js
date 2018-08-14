import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { Button, TextInput } from 'bm-kit';
import '../../assets/_form.scss';

class RequestPasswordResetForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const { error, onSubmit } = this.props;
    return (
      <div>
        <TextInput
          name="email"
          label="Email"
          hasError={!!error}
          errorText={error}
          onChange={this.handleEmail}
        />
        <Button type="submit" onClick={() => onSubmit(this.state.email)}>
          Submit
        </Button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'RequestPasswordResetForm' // a unique identifier for this form
})(RequestPasswordResetForm);

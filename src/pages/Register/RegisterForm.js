import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextInput } from 'bm-kit';

import GithubLoginButton from '../../components/GithubLoginButton';

import '../../assets/_form.scss';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
class RegisterForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }
  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const { error, submitting } = this.props;
    return (
      <div>
        <TextInput
          name="email"
          type="email"
          className="topSpacing"
          component={renderField}
          label="Email"
          value={this.state.email}
          onChange={this.updateEmail}
        />
        <TextInput
          name="password"
          type="password"
          className="topSpacing"
          component={renderField}
          label="Password"
          value={this.state.password}
          onChange={this.updatePassword}
        />
        {error && <div className="margint">{error}</div>}
        <Button
          full={true}
          type="submit"
          disabled={submitting}
          onClick={() =>
            this.props.onSubmit(this.state.email, this.state.password)
          }
        >
          Register
        </Button>
        <GithubLoginButton className="topSpacing" actionText="Register" />
        <div className="flex margint h-center">
          <div>
            Already Have an account?
            <Link to="/login" className="p-login__links">
              Login here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;

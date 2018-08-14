import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextInput } from 'bm-kit';
import GithubLoginButton from '../../components/GithubLoginButton';

import './_pillar.login.source.scss';

class LoginForm extends PureComponent {
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
    const { error, onSubmit, submitting } = this.props;

    return (
      <div>
        <TextInput
          name="email"
          type="text"
          label="Email"
          onChange={this.updateEmail}
          value={this.state.email}
        />
        <TextInput
          name="password"
          type="password"
          label="Password"
          onChange={this.updatePassword}
          value={this.state.password}
        />
        {error && <div className="margint">{error}</div>}
        <Button
          type="submit"
          disabled={submitting}
          full
          onClick={() => onSubmit(this.state.email, this.state.password)}
        >
          Login
        </Button>
        <GithubLoginButton actionText="Login" />

        <div className="flex margint h-center">
          <Link to="/register" className="p-login__links">
            Register
          </Link>{' '}
          /{' '}
          <Link to="/reset" className="p-login__links">
            Forgot your password?
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;

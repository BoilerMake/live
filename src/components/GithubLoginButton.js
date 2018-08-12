import React from 'react';
import { githubLogin } from '../actions';
import { ALLOW_SIGNUPS } from '../config';
const GithubLoginButton = ({ actionText }) => {
  return ALLOW_SIGNUPS ? (
    <div onClick={githubLogin} className="p-login__with_github">
      <i className="fa fa-github" />
      &nbsp;
      {actionText} with GitHub
    </div>
  ) : null;
};

export default GithubLoginButton;

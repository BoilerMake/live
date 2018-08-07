import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Button, TextInput } from 'bm-kit';
import GithubLoginButton from '../../components/GithubLoginButton'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const LoginForm = (props) => {
    const { error, handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
            <TextInput name="email" type="email" component={renderField} label="Email" className="topSpacing" placeholder="you@school.edu"/>
            <TextInput name="password" type="password" component={renderField} label="Password" className="topSpacing" />
            {error && <div className="margint">{error}</div>}
            <Button type="submit" disabled={submitting} full>Login</Button>
            <GithubLoginButton actionText="Login"/>

            <div className="flex margint h-center">
                <Link to="/register">Register</Link> / <Link to="/reset">Forgot your password?</Link>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'Login'  // a unique identifier for this form
})(LoginForm)

import React from 'react';

import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field placeholder='email' name='email' component="input" type='text' />
		</div>
		<div>
			<Field placeholder='password' name='password' component="input" type='password' />
		</div>
		<div>
			<Field type='checkbox' name='rememberMe' component="input" /> Remember me
	</div>
		<div>
			<button>Login</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

const Login = (props) => {


	const onSubmit = (formData) => {
		// console.log(formData);
		props.postLoginData(formData)

	}

	return <div>
		<h1>Login </h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>

}

export default Login;
import React from 'react';
import styles from './Login.module.scss'
import { reduxForm, Field } from 'redux-form';
import { Button } from '../common/Button/Button';
import { Input, Checkbox } from '../common/formControl/formControls';
import { required, maxLength30 } from '../../utilits/validators/validator';
import { Redirect } from 'react-router-dom';


const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={styles.form}>
		<div className={styles.form__input}>
			<Field placeholder='email' name='email' component={Input} type='text' validate={[required, maxLength30]} />
		</div>
		<div className={styles.form__input}>
			<Field placeholder='password' name='password' component={Input} type='password' validate={[required, maxLength30]} />
		</div>
		<div className={styles.form__input}>
			<Field type='checkbox' name='rememberMe' component={Checkbox} /> Remember me
	</div>
		<div>
			<Button valueButton={'Login'} />
		</div>
	</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

const Login = (props) => {


	const onSubmit = (formData) => {

		props.loginThunk(formData.email, formData.password, formData.rememberMe)

	}
	if (props.authed) return <Redirect to={'/profile'} />

	return <div className={styles.login}>
		<div className={styles.notepad}>
			<h1 className={styles.notepad__title}>Login </h1>
			{props.error && <div className={styles.notepad__error}> {props.error} </div>}
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
		<div className={styles.test}>
			<div className={styles.test__text}>Email: free@samuraijs.com</div>
			<div className={styles.test__text}>Password: free</div>
		</div>

	</div>

}

export default Login;
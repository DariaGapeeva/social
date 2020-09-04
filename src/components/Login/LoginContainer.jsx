import React from 'react';
import Login from './Login';
import { authApi } from '../../API/api';
import { connect } from 'react-redux';
import { loginThunk, postLoginData } from '../../redux/loginReducer'


class LoginContainer extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.email !== this.props.email || prevProps.password !== this.props.password || this.props.rememberMe !== prevProps.rememberMe) {
			this.props.loginThunk(this.props.email, this.props.password, this.props.rememberMe)
		}


	}

	render = () => {
		return <Login postLoginData={this.props.postLoginData} />
	}
}

const mapStateTpProps = (state) => {
	return {
		email: state.login.email,
		password: state.login.password,
		rememberMe: state.login.rememberMe
	}
}

export default connect(mapStateTpProps, { loginThunk, postLoginData })(LoginContainer);

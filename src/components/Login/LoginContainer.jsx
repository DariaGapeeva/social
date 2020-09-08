import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/authReducer'


// class LoginContainer extends React.Component {
// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevProps.email !== this.props.email || prevProps.password !== this.props.password || this.props.rememberMe !== prevProps.rememberMe) {
// 			this.props.loginThunk(this.props.email, this.props.password, this.props.rememberMe)
// 		}


// 	}

// 	render = () => {
// 		return <Login postLoginData={this.props.postLoginData} />
// 	}
// }

const mapStateToProps = (state) => {
	return {
		authed: state.auth.authed,

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginThunk: (email, password, rememberMe) => dispatch(loginThunk(email, password, rememberMe))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

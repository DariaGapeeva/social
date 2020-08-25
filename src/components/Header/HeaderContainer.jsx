import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData } from './../../redux/authReducer';
import { authApi } from './../../API/api'

class HeaderContainer extends React.Component {
	componentDidMount() {
		authApi.login().then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data;
				this.props.setUserData(id, email, login);
			}

		})
	}

	render() {
		return <Header {...this.props} />
	}
}


const mapStateToProps = (state) => {
	return {
		authed: state.auth.authed,
		login: state.auth.login
	}
}
export default connect(mapStateToProps, { setUserData })(HeaderContainer);
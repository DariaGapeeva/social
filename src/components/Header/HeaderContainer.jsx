import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authThunk, logoutThunk } from './../../redux/authReducer';



class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authThunk();
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

export default connect(mapStateToProps, { authThunk, logoutThunk })(HeaderContainer);
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunk } from './../../redux/authReducer';



class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, { logoutThunk })(HeaderContainer);
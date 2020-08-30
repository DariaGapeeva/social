import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authThunkCreator } from './../../redux/authReducer';


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

const mapDispatchToProps = (dispatch) => {
	return {

		authThunk: () => dispatch(authThunkCreator())

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
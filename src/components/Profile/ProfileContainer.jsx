import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk, getUserStatus, updateUserStatus } from '../../redux/profilePageReducer'
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId;
		}
		this.props.getProfileThunk(userId);
		this.props.getUserStatus(userId);




	}

	render = () => {

		return <Profile {...this.props}
			profile={this.props.profile}
			status={this.props.status}
			updateUserStatus={this.props.updateUserStatus} />
	}


}




let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	userId: state.auth.id

})


export default compose(
	connect(mapStateToProps, { getProfileThunk, getUserStatus, updateUserStatus }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)
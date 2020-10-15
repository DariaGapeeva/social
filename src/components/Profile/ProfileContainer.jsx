import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk, getUserStatus, updateUserStatus } from '../../redux/profilePageReducer'
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile, getStatus } from '../../redux/profileSelectors';
import { getAuthId } from '../../redux/authSelectors';
import { PureComponent } from 'react';

class ProfileContainer extends PureComponent {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId;
		}
		this.props.getProfileThunk(userId);
		this.props.getUserStatus(userId);




	}

	render = () => {
		console.log("render profile");

		return <Profile {...this.props}
			profile={this.props.profile}
			status={this.props.status}
			updateUserStatus={this.props.updateUserStatus} />
	}


}




let mapStateToProps = (state) => {
	console.log('mapstatetorpops render');
	return ({
		profile: getProfile(state),
		status: getStatus(state),
		userId: getAuthId(state)

	})
}

export default compose(
	connect(mapStateToProps, { getProfileThunk, getUserStatus, updateUserStatus }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)
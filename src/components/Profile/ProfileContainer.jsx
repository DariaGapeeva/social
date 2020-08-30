import React from 'react';
import Profile from './Profile'
import axios from 'axios';
import { connect } from 'react-redux';
import { getProfileThunk } from '../../redux/profilePageReducer'
import { withRouter, Redirect } from 'react-router-dom';
import { profileApi } from '../../API/api';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getProfileThunk(userId);
	}

	render = () => {

		return <Profile {...this.props} profile={this.props.profile} />
	}


}




let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,

})


export default compose(
	connect(mapStateToProps, { getProfileThunk }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
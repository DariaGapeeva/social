import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getFollowedUserThunk, follow, unfollow, } from './../../redux/usersPageReducer'
import Preloader from '../common/preloader/Preloader';

class FriendsContainer extends React.Component {

	componentDidMount() {
		this.props.getFollowedUserThunk(this.props.pageSize, this.props.currentPage)
	}




	render() {
		return <>
			{this.props.fetched ? <Preloader /> : null}
			<Friends {...this.props}





			/>



		</>
	}
}






const mapStateToProps = (state) => {
	return {
		fetched: state.usersPage.fetched,
		followedUsers: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		followingInProgress: state.usersPage.followingInProgress,
		totalUsersCount: state.usersPage.totalUsersCount,

	}
}




export default connect(mapStateToProps, { getFollowedUserThunk, follow, unfollow, })(FriendsContainer);
import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getFriendsThunkcreator, follow, unfollow, } from './../../redux/usersPageReducer'
import Preloader from '../common/preloader/Preloader';

class FriendsContainer extends React.Component {

	componentDidMount() {
		this.props.getFriendsThunkcreator(this.props.pageSize, this.props.currentPage)
	}




	render() {
		return <>
			{this.props.fetched ? <Preloader /> : null}
			<Friends
				fetched={this.props.fetched}
				followedUsers={this.props.followedUsers}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}

				followingInProgress={this.props.followingInProgress}
				totalCountFriends={this.props.totalCountFriends}




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
		totalCountFriends: state.usersPage.totalCountFriends,
	}
}




export default connect(mapStateToProps, { getFriendsThunkcreator, follow, unfollow, })(FriendsContainer);
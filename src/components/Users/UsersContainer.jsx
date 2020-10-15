import { connect } from 'react-redux';
import {
	follow, unfollow, setUsers, setCurrentPage, setTotalCountUser, toggleFetched,
	toggleFollowingProgress, getUsersThunkcreator, getUsersPageThunkcreator, unfollowThunkCreator, followThunkCreator
} from './../../redux/usersPageReducer';
import Users from './Users'
import React from 'react';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from './../../HOC/withAuthRedirect'
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getFetched, getFollowingInProgress } from '../../redux/usersSelectors';

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
	}

	setNewCurrentPage = (page) => {
		this.props.getUsersPageThunk(this.props.pageSize, page)
	}

	render() {

		return <>
			{this.props.fetched ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				setNewCurrentPage={this.setNewCurrentPage}
				currentPage={this.props.currentPage}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				users={this.props.users}
				followingInProgress={this.props.followingInProgress}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				unfollowThunk={this.props.unfollowThunk}
				followThunk={this.props.followThunk}
			/>
		</>
	}
}


const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		fetched: getFetched(state),
		followingInProgress: getFollowingInProgress(state),

	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => dispatch(follow(id)),
		unfollow: (id) => dispatch(unfollow(id)),
		setUsers: (users) => dispatch(setUsers(users)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
		setTotalCountUser: (totalCount) => dispatch(setTotalCountUser(totalCount)),
		toggleFetched: (fetched) => dispatch(toggleFetched(fetched)),
		toggleFollowingProgress: (fetched, id) => dispatch(toggleFollowingProgress(fetched, id)),
		getUsersThunk: (pageSize, currentPage) => dispatch(getUsersThunkcreator(pageSize, currentPage)), getUsersPageThunkcreator,
		getUsersPageThunk: (pageSize, page) => dispatch(getUsersPageThunkcreator(pageSize, page)),
		unfollowThunk: (id) => dispatch(unfollowThunkCreator(id)),
		followThunk: (id) => dispatch(followThunkCreator(id))

	}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(UsersAPIComponent)
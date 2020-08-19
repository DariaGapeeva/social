import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountUserAC, toggleFetchedAC } from './../../redux/usersPageReducer';
import Users from './Users'
import * as axios from 'axios';
import React from 'react';
import Preloader from '../common/preloader/Preloader';

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		this.props.toggleFetched(true);
		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
				.then(response => {
					this.props.toggleFetched(false);
					this.props.setUsers(response.data.items);
					this.props.setTotalCountUser(response.data.totalCount)
				})
		}
	}

	setNewCurrentPage = (page) => {
		this.props.setCurrentPage(page);
		this.props.toggleFetched(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
			.then(response => {
				this.props.toggleFetched(false);
				this.props.setUsers(response.data.items)
			})
	}

	render() {

		return <>
			{this.props.fetched ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				setNewCurrentPage={this.setNewCurrentPage}
				currentPage={this.props.currentPage}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				users={this.props.users} />
		</>
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		fetched: state.usersPage.fetched

	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => dispatch(followAC(id)),
		unfollow: (id) => dispatch(unfollowAC(id)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
		setTotalCountUser: (totalCount) => dispatch(setTotalCountUserAC(totalCount)),
		toggleFetched: (fetched) => dispatch(toggleFetchedAC(fetched))
	}
};




export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
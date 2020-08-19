import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountUserAC } from './../../redux/usersPageReducer';
import Users from './Users'
import * as axios from 'axios';
import React from 'react';

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {

				return this.props.setUsers(response.data.items),
					this.props.setTotalCountUser(response.data.totalCount)
			})
		}
	}

	setNewCurrentPage = (page) => {
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {

		return <Users totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			setNewCurrentPage={this.setNewCurrentPage}
			currentPage={this.props.currentPage}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			users={this.props.users} />
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,

	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => dispatch(followAC(id)),
		unfollow: (id) => dispatch(unfollowAC(id)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
		setTotalCountUser: (totalCount) => dispatch(setTotalCountUserAC(totalCount))
	}
};




export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
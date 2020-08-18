import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from './../../redux/usersPageReducer';
import Users from './Users'


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => dispatch(followAC(id)),
		unfollow: (id) => dispatch(unfollowAC(id)),
		setUsers: (users) => dispatch(setUsersAC(users))
	}
};




export default connect(mapStateToProps, mapDispatchToProps)(Users);
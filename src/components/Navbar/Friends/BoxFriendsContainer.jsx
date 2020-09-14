import React from 'react';
import BoxFriends from './BoxFriends';
import { connect } from 'react-redux';




const mapStateToProps = (state) => {
	return {
		state: state,
		friends: state.usersPage.friends
	}
}



export default connect(mapStateToProps)(BoxFriends)
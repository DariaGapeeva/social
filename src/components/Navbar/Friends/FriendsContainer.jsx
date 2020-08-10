import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import MyContext from '../../../MyContext';



// const FriendsContainer = () => {

// 	return <MyContext.Consumer>
// 		{(store) => {
// 			let state = store.getState();
// 			return <Friends state={state} />
// 		}}
// 	</MyContext.Consumer>

// }


const mapStateToProps = (state) => {
	return {
		state: state
	}
}




const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
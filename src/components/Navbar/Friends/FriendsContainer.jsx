import React from 'react';
import Friends from './Friends';



const FriendsContainer = (props) => {
	let state = props.store.getState();
	return <Friends state={state} />
}

export default FriendsContainer;
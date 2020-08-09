import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

	return <div>
		<ProfileInfo />
		<MyPostsContainer
			store={props.store}
		// dataPost={props.state.dataPost}
		// newPostText={props.state.newPostText}
		// dispatch={props.dispatch}
		/>
	</div>
}

export default Profile;
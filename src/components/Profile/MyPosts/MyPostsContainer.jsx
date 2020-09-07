import React from 'react';
import { connect } from 'react-redux';
import { addPost, addNewLike } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
// import MyContext from './../../../MyContext';

// const MyPostsContainer = () => {

// 	return (
// 		<MyContext.Consumer>
// 			{(store) => {
// 				let state = store.getState();
// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator())

// 				};

// 				let updateNewText = (text) => {
// 					store.dispatch(updateNewPostTextActionCreator(text))
// 				}

// 				let addLike = (id) => {
// 					store.dispatch(addLikeActionCreator(id))
// 				}

// 				return <MyPosts addNewPost={addPost}
// 					newPostText={state.profilePage.newPostText}
// 					updateNewText={updateNewText}
// 					dataPost={state.profilePage.dataPost}
// 					addNewLike={addLike} />
// 			}
// 			}
// 		</MyContext.Consumer>)
// }
const mapStateToProps = (state) => {

	return {
		// newPostText: state.profilePage.newPostText,
		dataPost: state.profilePage.dataPost
	}
};


const MyPostContainer = connect(mapStateToProps, { addPost, addNewLike })(MyPosts);


export default MyPostContainer;







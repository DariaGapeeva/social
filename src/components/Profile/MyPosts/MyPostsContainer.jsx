import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator, addLikeActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';





const MyPostsContainer = (props) => {


	let state = props.store.getState();



	let addPost = () => {



		props.store.dispatch(addPostActionCreator())

	};

	// let postElements = props.dataPost.map(data => <Post message={data.message} countlike={data.countlike} url={data.url} id={data.id} dispatch={props.dispatch} />)

	let updateNewText = (text) => {

		props.store.dispatch(updateNewPostTextActionCreator(text))
	}

	let addLike = (id) => {
		props.store.dispatch(addLikeActionCreator(id))
	}
	// return <div>
	// 	<div>
	// 		My posts
	// 	<div>
	// 			New post
	// 	</div>
	// 		<div>
	// 			<textarea onChange={onPostChange} value={props.newPostText} />

	// 		</div>
	// 		<div>
	// 			<button onClick={addPost}>Отправить</button>
	// 		</div>

	// 		<div>
	// 			{postElements}

	// 		</div>

	// 	</div>
	// </div >


	return <MyPosts addNewPost={addPost}
		newPostText={state.profilePage.newPostText}
		updateNewText={updateNewText}
		dataPost={state.profilePage.dataPost}
		addNewLike={addLike}

	/>
}

export default MyPostsContainer;
import React from 'react';
import Post from './Post/Post';






const MyPosts = (props) => {


	let addPost = () => {


		if (props.newPostText !== '') {
			props.addNewPost();
		}

	};

	let postElements = props.dataPost.map(data => <Post key={data.id} message={data.message} countlike={data.countlike} url={data.url} id={data.id} addNewLike={props.addNewLike} />)

	let onPostChange = (event) => {
		props.updateNewText(event.target.value);
	}


	return <div>
		<div>
			My posts
		<div>
				New post
		</div>
			<div>
				<textarea onChange={onPostChange} value={props.newPostText} />

			</div>
			<div>
				<button onClick={addPost}>Отправить</button>
			</div>

			<div>
				{postElements}

			</div>

		</div>
	</div >
}

export default MyPosts;
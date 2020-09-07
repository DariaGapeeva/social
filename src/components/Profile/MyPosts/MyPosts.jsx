import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field, reset } from 'redux-form';
import { required } from '../../../utilits/validators/validator';






const MyPosts = (props) => {

	let postElements = props.dataPost.map(data => <Post key={data.id} message={data.message} countlike={data.countlike} url={data.url} id={data.id} addNewLike={props.addNewLike} />)

	const onSubmit = (formData) => {
		console.log(formData.postChange);
		if (formData.postChange !== '') {
			props.addPost(formData.postChange);

		}
	}


	return <div>
		<div>
			My posts
		<div>
				New post
		</div>

			<PostReduxForm onSubmit={onSubmit} />
			<div>
				{postElements}
			</div>

		</div>
	</div >
}



const PostForm = (props) => {


	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field
				name="postChange"
				component="textarea"
				type="text"
				validate={required} />
		</div>
		<div>
			<button> Отправить</button>
		</div>
	</form>
}
// const afterSubmit = () => {
// 	dispatch(reset('post'))
// }

const PostReduxForm = reduxForm({
	form: 'post',
	// onSummitSuccess: afterSubmit,
})(PostForm)

export default MyPosts;
import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field, reset } from 'redux-form';
import { required, maxLength30 } from '../../../utilits/validators/validator';
import { Textarea } from '../../common/formControl/formControls';
import { Button } from '../../common/Button/Button';
import styles from './MyPosts.module.scss';




const MyPosts = (props) => {

	let postElements = props.dataPost.map(data => <Post key={data.id} message={data.message} countlike={data.countlike} url={data.url} id={data.id} addNewLike={props.addNewLike} />)

	const onSubmit = (formData) => {
		console.log(formData.postChange);
		if (formData.postChange !== '') {

			props.addPost(formData.postChange);

		}
	}


	return <div className={styles.myPosts}>
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


	return <form className={styles.form} onSubmit={props.handleSubmit}>
		<div className={styles.form__textarea}>
			<Field
				name="postChange"
				component={Textarea}
				type="text"
				validate={[required, maxLength30]}
				placeholder='post message' />
		</div>
		<div className={styles.form__button}>
			<Button valueButton={'Отправить'} />
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
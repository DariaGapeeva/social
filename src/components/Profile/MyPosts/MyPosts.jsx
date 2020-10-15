import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field, reset } from 'redux-form';
import { required } from '../../../utilits/validators/validator';
import { Textarea } from '../../common/formControl/formControls';
import { Button } from '../../common/Button/Button';
import styles from './MyPosts.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.scss';




const MyPosts = (props) => {

	let postElements = props.dataPost.map(data => <Post key={data.id} message={data.message} countlike={data.countlike} url={data.url} id={data.id} addNewLike={props.addNewLike} deletePost={props.deletePost} />)

	const onSubmit = (formData) => {
		console.log(formData.postChange);
		if (formData.postChange !== '') {

			props.addPost(formData.postChange);

		}
	}


	return <div className={styles.myPosts}>
		<div>
			<Tabs>
				<TabList >
					<Tab>My posts</Tab>
					<Tab>My music</Tab>
				</TabList>

				<TabPanel>
					{/* <h2>Any content 1</h2> */}
					<PostReduxForm onSubmit={onSubmit} />
					<div>
						{postElements}
					</div>

				</TabPanel>
				<TabPanel>
					<h2>здесь будет музыка</h2>
				</TabPanel>
			</Tabs>

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
				validate={[required]}
				placeholder='post message' />
		</div>
		<div className={styles.form__button}>
			<Button valueButton={'Добавить'} />
		</div>
	</form>
}
const afterSubmit = (result, dispatch) =>
	dispatch(reset('post'));

const PostReduxForm = reduxForm({
	form: 'post',
	onSubmitSuccess: afterSubmit,
})(PostForm)

export default MyPosts;
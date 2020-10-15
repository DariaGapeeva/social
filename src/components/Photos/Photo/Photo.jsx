import React, { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import { useForm } from 'react-hook-form';
import { Button } from '../../common/Button/Button';
import TextareaAutosize from 'react-textarea-autosize';
import styleform from '../../common/formControl/formControl.module.scss';
import styles from './Photo.module.scss';

const Comment = ({ comment }) => {
	return (
		<div> {comment}</div>
	)

}



const PhotosCommentsForm = ({ id, url, title, comments, addComment }) => {

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data, e) => {
		addComment(id, data.comment);
		e.target.reset()
	}

	return (
		<div>
			<div>
				<img src={url} />
				<p>{title}</p>
			</div>
			{comments.map((comment, index) => <Comment key={index} comment={comment} />)}


			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styleform.textareaVariant}>
					<TextareaAutosize name="comment" ref={register({ required: true })} autoFocus />
				</div>
				<Button valueButton="Отправить" type="submit">  </Button>
			</form>


		</div>

	)
}

const Photo = ({ id, url, title, comments, addComment }) => {

	const [modalActive, setModalActive] = useState(false)
	return (
		<div className={styles.box}>
			<img src={url} onClick={() => setModalActive(true)} />
			<Modal active={modalActive} setActive={setModalActive} >
				<PhotosCommentsForm id={id} url={url} title={title} comments={comments} addComment={addComment} />

			</Modal>
		</div>
	)
}


export default Photo;
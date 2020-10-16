import React, { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import styles from './Photo.module.scss';
import PhotosCommentsForm from './PhotoCommentsForm/PhotoCommentsForm'



const Photo = ({ id, url, title, comments, countHeart, addComment, addCountHeart }) => {

	const [modalActive, setModalActive] = useState(false)
	return (
		<div className={styles.box}>
			<div className={styles.box__photo}>
				<img className={styles.box__img} src={url} onClick={() => setModalActive(true)} />
			</div>
			<Modal active={modalActive} setActive={setModalActive} >
				<PhotosCommentsForm id={id} url={url} title={title} comments={comments} countHeart={countHeart} addComment={addComment} addCountHeart={addCountHeart} />

			</Modal>
		</div>
	)
}


export default Photo;
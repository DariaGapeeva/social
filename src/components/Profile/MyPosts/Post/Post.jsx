import React from 'react';
import styles from './Post.module.css';



const Post = (props) => {
	let addLike = () => {

		props.addNewLike(props.id);

	}


	return <div className={styles.item}>

		<img src={props.url} />
		{props.message}
		<div className={styles.socialReviews}>
			<span>
				<button onClick={addLike}>like</button>
				{props.countlike}</span>

		</div>
	</div >

}

export default Post;
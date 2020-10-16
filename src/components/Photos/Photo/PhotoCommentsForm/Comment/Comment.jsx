import React from 'react';
import styles from './Comment.module.scss'

const Comment = ({ comment, photoSmall }) => {

	let now = new Date();
	let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']


	return (
		<div className={styles.comment}>
			<div className={styles.comment__img}>
				<img src={photoSmall} />
			</div>
			<div className={styles.comment__text}>
				{comment}
			</div>

			<div className={styles.comment__date}>{`${now.getDate()}  ${months[now.getMonth()]} ${now.getFullYear()} `} </div>
		</div>
	)

}

export default Comment; 
import React from 'react';
import Data from '../../../../common/Data/Data';
import styles from './Comment.module.scss'

const Comment = ({ comment, photoSmall }) => {




	return (
		<div className={styles.comment}>
			<div className={styles.comment__img}>
				<img src={photoSmall} />
			</div>
			<div className={styles.comment__text}>
				{comment}
			</div>

			<div className={styles.comment__date}>
				<Data />
			</div>
		</div>
	)

}

export default Comment; 
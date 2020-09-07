import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ valueButton }) => {

	return (
		<div className={styles.button}  >
			<button>{valueButton}</button>
		</div>
	)
}

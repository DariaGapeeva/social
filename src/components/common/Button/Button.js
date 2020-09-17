import { prependOnceListener } from 'process';
import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ valueButton, onClick }) => {

	return (
		<div className={styles.button}  >
			<button onClick={onClick}>{valueButton}</button>
		</div>
	)
}

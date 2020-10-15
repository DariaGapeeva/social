import { prependOnceListener } from 'process';
import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ valueButton, onClick, type }) => {

	return (
		<div className={styles.button}  >
			<button onClick={onClick} type={type}>{valueButton}</button>
		</div>
	)
}

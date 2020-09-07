import React from 'react';
import styles from './formControl.module.scss';

export const Textarea = ({ input, type, placeholder, meta }) => {

	return (
		<div className={styles.formControl + ' ' + styles.error}  >
			<textarea  {...input} type={type} placeholder={placeholder} />
			{/* <span className={styles.formControl__cross}>&#10059;</span> */}
			{meta.touched && meta.error && <span className={styles.formControl__error}>Заполните пожалуйста обязательные поля</span>}
		</div>
	)
}

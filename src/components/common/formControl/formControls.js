import React from 'react';
import styles from './formControl.module.scss';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';











export const Textarea = ({ input, type, wrap, cols, placeholder, meta }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}  >
			<TextareaAutosize  {...input} type={type} placeholder={placeholder} wrap={wrap} cols={cols} />
			{/* <span className={styles.formControl__cross}>&#10059;</span> */}
			{/* {meta.touched && meta.error && <span className={styles.formControl__error}>{meta.error}</span>} */}
		</div>
	)
}

export const TextareaVariant = (props) => {
	return (
		<div className={styles.textareaVariant}>
			<TextareaAutosize />
		</div>
	)


}

export const Input = ({ input, type, placeholder, meta }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.inputControl + ' ' + (hasError ? styles.error : '')}  >
			<input  {...input} type={type} placeholder={placeholder} />

			{hasError && <span className={styles.inputControl__cross}>&#10059;</span>}

			{hasError && <span className={styles.inputControl__errorText}>{meta.error}</span>}
		</div>
	)
}
export const Checkbox = ({ input, type, placeholder, meta }) => {

	return (
		<div className={meta.touched && meta.error ? styles.checkboxControl + ' ' + styles.error : styles.checkboxControl}  >
			<input  {...input} type={type} placeholder={placeholder} />


		</div>
	)
}


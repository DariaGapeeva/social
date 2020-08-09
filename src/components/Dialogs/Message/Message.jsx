import React from 'react';
import styles from './Message.module.css';



const Message = (props) => {

	const classes = {
		user: {}
	}
	if (props.user === 'me') {
		classes.user = {
			marginLeft: '460px'
		}
	} else {
		classes.user = {
			marginLeft: '20px'
		}
	}


	return (

		<div style={classes.user}>
			<div className={styles.name}>
				{props.user}
			</div>
			<div className={styles.message}>
				{props.message}
			</div>
		</div >
	)

}

export default Message;
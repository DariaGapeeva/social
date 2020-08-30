import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem.jsx';
import Message from './Message/Message.jsx';
import { Redirect } from 'react-router-dom';





const Dialogs = (props) => {

	let dialogsElements = props.dataPerson.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} url={dialog.url} />)

	let messagesElements = props.dataMessage.map(message => <Message key={message.id} message={message.message} user={message.user} user={message.user} />)



	let addMessage = () => {
		if (props.newMessageText !== '') {
			props.addNewMessage();
			// props.dispatch(addMessageActionCreator());
		}

	}
	let onMessageChange = (event) => {
		props.updateNewMessageText(event.target.value);
		// props.dispatch(updateNewMessageTextActionCreator(event.target.value))
	}
	// if (!props.authed) { return <Redirect to='/login' /> }
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogs__items}>
				{dialogsElements}
			</div>

			<div className={styles.dialogs__messages}>
				{messagesElements}

				<div className={styles.dialogs__newPost}>
					<div className={styles.dialogs__title}>me</div>.
					<div className={styles.dialogs__textarea}>
						<textarea onChange={onMessageChange} wrap="hard" value={props.newMessageText} />
					</div>
					<button className={styles.dialogs__btn} onClick={addMessage}>Send</button>

				</div>

			</div>
		</div>
	)
}

export default Dialogs;
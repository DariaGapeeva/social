import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

	let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}
	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text))
	}
	return <Dialogs dataPerson={state.dialogsPage.dataPerson}
		dataMessage={state.dialogsPage.dataMessage}
		addNewMessage={addMessage}
		updateNewMessageText={onMessageChange}
		newMessageText={state.dialogsPage.newMessageText} />
}

export default DialogsContainer;
import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dataPerson: state.dialogsPage.dataPerson,
		dataMessage: state.dialogsPage.dataMessage,
		newMessageText: state.dialogsPage.newMessageText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addNewMessage: () => { dispatch(addMessageActionCreator()) },
		updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) }
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;
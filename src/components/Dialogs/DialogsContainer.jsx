import React from 'react';
import { updateNewMessageText, addNewMessage } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dataPerson: state.dialogsPage.dataPerson,
		dataMessage: state.dialogsPage.dataMessage,
		newMessageText: state.dialogsPage.newMessageText
	}
}


const DialogsContainer = connect(mapStateToProps, { addNewMessage, updateNewMessageText })(Dialogs)



export default DialogsContainer;
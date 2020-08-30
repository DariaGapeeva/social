import React from 'react';
import { updateNewMessageText, addNewMessage } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../HOC/withAuthRedirect'
import { compose } from 'redux';




const mapStateToProps = (state) => {
	return {
		dataPerson: state.dialogsPage.dataPerson,
		dataMessage: state.dialogsPage.dataMessage,
		newMessageText: state.dialogsPage.newMessageText,

	}
}

export default compose(
	connect(mapStateToProps, { addNewMessage, updateNewMessageText }),
	withAuthRedirect
)(Dialogs)
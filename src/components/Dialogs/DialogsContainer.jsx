import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import MyContext from '../../MyContext';




// const DialogsContainer = () => {


// 	return <MyContext.Consumer>
// 		{(store) => {
// 			let state = store.getState();

// 			let addMessage = () => {
// 				store.dispatch(addMessageActionCreator());
// 			}
// 			let onMessageChange = (text) => {
// 				store.dispatch(updateNewMessageTextActionCreator(text))
// 			}
// 			return <Dialogs dataPerson={state.dialogsPage.dataPerson}
// 				dataMessage={state.dialogsPage.dataMessage}
// 				addNewMessage={addMessage}
// 				updateNewMessageText={onMessageChange}
// 				newMessageText={state.dialogsPage.newMessageText} />
// 		}}

// 	</MyContext.Consumer>
// }
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
import React from 'react';
import { addMessage } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';




const mapStateToProps = (state) => {
	return {
		dataPerson: state.dialogsPage.dataPerson,
		dataMessage: state.dialogsPage.dataMessage,
	}
}

export default compose(
	connect(mapStateToProps, { addMessage }),
	// withAuthRedirect
)(Dialogs)
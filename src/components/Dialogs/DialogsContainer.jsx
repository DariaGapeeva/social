import React from 'react';
import { addMessage } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect'



const mapStateToProps = (state) => {
	return {
		dataPerson: state.dialogsPage.dataPerson,
		dataMessage: state.dialogsPage.dataMessage,
	}
}

export default compose(
	connect(mapStateToProps, { addMessage }),
	withAuthRedirect
)(Dialogs)
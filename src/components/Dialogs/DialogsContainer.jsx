import React from 'react';
import { addMessage } from '../../redux/dialogsPageReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { getDataMessage, getDataPerson } from '../../redux/dialogsSelectors';



const mapStateToProps = (state) => {
	return {
		dataPerson: getDataPerson(state),
		dataMessage: getDataMessage(state),
	}
}

export default compose(
	connect(mapStateToProps, { addMessage }),
	withAuthRedirect
)(Dialogs)
import React from 'react';
import { connect } from 'react-redux';
import Photos from './Photos';
import { addCommentAC } from './../../redux/photosPageReduser'

const mapStateToProps = (state) => {

	return {
		photos: state.photosPage.photos,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addComment: (id, newComment) => (dispatch(addCommentAC(id, newComment))),


	}

}


export default connect(mapStateToProps, mapDispatchToProps)(Photos)
import React from 'react';
import { connect } from 'react-redux';
import Photos from './Photos';
import { addCommentAC, addCountHeartAC } from './../../redux/photosPageReduser';
import { getProfile } from '../../redux/profileSelectors';


const mapStateToProps = (state) => {

	return {
		photos: state.photosPage.photos,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addComment: (id, newComment) => (dispatch(addCommentAC(id, newComment))),
		addCountHeart: (id) => (dispatch(addCountHeartAC(id))),


	}

}


export default connect(mapStateToProps, mapDispatchToProps)(Photos)
import React from 'react';
import { connect } from 'react-redux';
import { addPost, addNewLike, deletePost } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {

	return {

		dataPost: state.profilePage.dataPost
	}
};


const MyPostContainer = connect(mapStateToProps, { addPost, addNewLike, deletePost })(MyPosts)

export default MyPostContainer;







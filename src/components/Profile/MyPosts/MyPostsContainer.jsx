import React from 'react';
import { connect } from 'react-redux';
import { addPost, addNewLike } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {

	return {

		dataPost: state.profilePage.dataPost
	}
};


const MyPostContainer = connect(mapStateToProps, { addPost, addNewLike })(MyPosts);


export default MyPostContainer;







import React, { useState, useEffect } from 'react';
import styles from './Settings.module.css';
import photo1 from './../../jpg/profile1.png';
import { Button } from '../common/Button/Button';
import { profileApi } from '../../API/api';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

const Settings = (props) => {

	let [photo, setPhoto] = useState({})

	const updatePhoto = () => {
		console.log(photo);

		profileApi.uploadPhoto(photo)
	}



	const onChangePhoto = (event) => {
		setPhoto(event.target.files[0])
		console.log(photo)

	}

	useEffect(() => {
		console.log(photo)
	}, [photo])

	return (

		<div>
			Выбрать фото для профайла:
			<div>
				<img src={photo1} />

			</div>
			<input type='file' onChange={onChangePhoto} />
			<Button valueButton='Загрузить' onClick={updatePhoto} />

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		photoProfile: state.profilePage.profile
	}
}



export default compose(
	connect(mapStateToProps, {}),
	withAuthRedirect
)(Settings)
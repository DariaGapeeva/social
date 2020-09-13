import React, { useState } from 'react';
import styles from './ProfileStatus.module.scss';
import { updateUserStatus } from './../../../../redux/profilePageReducer';
import { useEffect } from 'react';



const ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status)
	}
	const onStatusChange = (event) => {
		setStatus(event.target.value)
	}
	return (
		<div >
			{!editMode ? <div className={styles.item}>
				<span onDoubleClick={activateEditMode}>{!props.status ? "статуса НЕТ" : status}</span>
			</div> :
				<div className={styles.item}>
					<span><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input></span>
				</div>}
		</div>
	)

}



export default ProfileStatus;

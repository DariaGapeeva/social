import React from 'react';
import styles from './ProfileStatus.module.css';
import { updateUserStatus } from './../../../../redux/profilePageReducer';

class ProfileStatus extends React.Component {

	state = {
		editmode: false

	}
	activateEditMode = () => {



		console.log("this:", this)

		this.setState({
			editmode: true
		})
	}
	deactivateEditMode = () => {


		this.setState({
			editmode: false
		})
		this.props.updateUserStatus()
	}


	render = () => {
		return (
			<div>
				{!this.state.editmode ? <div>
					<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
				</div> :
					<div>
						<span><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input></span>
					</div>}
			</div>
		)


	}
}


export default ProfileStatus;

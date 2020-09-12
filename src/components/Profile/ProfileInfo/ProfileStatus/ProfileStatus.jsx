import React from 'react';
import styles from './ProfileStatus.module.scss';
import { updateUserStatus } from './../../../../redux/profilePageReducer';

class ProfileStatus extends React.Component {

	state = {
		editmode: false,
		status: this.props.status

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
		this.props.updateUserStatus(this.state.status)
	}

	onStatusChange = (event) => {
		this.setState({
			status: event.target.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}



	render = () => {
		console.log('render')

		return (
			<div >
				{!this.state.editmode ? <div className={styles.item}>
					<span onDoubleClick={this.activateEditMode}>{!this.props.status ? "статуса НЕТ" : this.props.status}</span>
				</div> :
					<div className={styles.item}>
						<span><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input></span>
					</div>}
			</div>
		)


	}
}


export default ProfileStatus;

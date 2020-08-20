import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../jpg/1.jpg'

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (<div className={styles.profile}>
		<div className={styles.profile__line}>

		</div>
		<div className={styles.profile__user}>
			<div className={styles.profile__photo}>
				<img src={props.profile.photos.small || userPhoto} />
			</div>
			<div className={styles.profile__info}>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Имя:</span> <span className={styles.profile__data} >{props.profile.fullName}</span> </div>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Обо мне:</span><span className={styles.profile__data}>{props.profile.aboutMe} </span> </div>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Моя работа:</span> <span className={styles.profile__data}>{props.profile.lookingForAJobDescription}</span> </div>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Мой личный сайт:</span> <span className={styles.profile__data}>{props.profile.website || 'Пока не сделал'} </span> </div>

			</div>



		</div>
		<div className={styles.profile__line}>

		</div>
	</div>
	)
}

export default ProfileInfo;
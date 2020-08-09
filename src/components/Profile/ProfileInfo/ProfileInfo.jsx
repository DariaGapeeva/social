import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (<div className={styles.profile}>
		<div className={styles.profile__line}>

		</div>
		<div className={styles.profile__user}>
			<div className={styles.profile__photo}>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRam8vYx8V_A2L-QRM1BiRI-Mb1tcYW3EhEuw&usqp=CAU' />
			</div>
			<div className={styles.profile__info}>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Имя:</span> <span className={styles.profile__data} >Нюша</span> </div>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Семейство:</span><span className={styles.profile__data}>Парнокопытные </span> </div>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Возраст:</span> <span className={styles.profile__data}>7 лет</span> </div>
				<div className={styles.profile__text}> <span className={styles.profile__title}>Родной город:</span> <span className={styles.profile__data}> Деревня</span> </div>

			</div>



		</div>
		<div className={styles.profile__line}>

		</div>
	</div>
	)
}

export default ProfileInfo;
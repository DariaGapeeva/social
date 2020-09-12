import React from 'react';
import styles from './Person.module.scss';


const Person = (props) => {
	return <div className={styles.person}>
		<div className={styles.person__photo}>
			<img src={props.url} />
		</div>
		<div className={styles.person__name}>
			{props.name}
		</div>





	</div >
}

export default Person;
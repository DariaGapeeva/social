import React from 'react';
import styles from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
	return (

		<div className={styles.item + ' ' + styles.active}>
			<div className={styles.item__photo}>
				<img src={props.url} />
			</div>
			<div styles={styles.item__link}>
				<NavLink to={'/dialogs/' + props.id} activeClassName={styles.active} >{props.name}</NavLink>
			</div>
		</div >)
}



export default DialogItem;
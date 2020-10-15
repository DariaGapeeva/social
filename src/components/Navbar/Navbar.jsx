import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import BoxFriendsContainer from './Friends/BoxFriendsContainer';

const Navbar = () => {
	return <div className={styles.navbar}>
		<nav className={styles.navbar__nav}>
			<div className={styles.navbar__item}>
				<NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
			</div>
			<div className={styles.navbar__item}>
				<NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
			</div>
			<div className={styles.navbar__item}>
				<NavLink to="/news" activeClassName={styles.active}>News</NavLink>
			</div>
			<div className={styles.navbar__item}>
				<NavLink to="/photos" activeClassName={styles.active}>Photos</NavLink>
			</div>
			<div className={styles.navbar__item}>
				<NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
			</div>
		</nav >


		<div className={styles.navbar__item_user}>
			<NavLink to='/friends' activeClassName={styles.active}>Friends</NavLink>
		</div>
		<BoxFriendsContainer />

		<div className={styles.navbar__item_user}>
			<NavLink to='/users' activeClassName={styles.active}>Find Friends</NavLink>
		</div>
	</div>
}

export default Navbar;
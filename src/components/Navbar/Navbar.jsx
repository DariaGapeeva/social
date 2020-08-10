import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = (props) => {
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
				<NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
			</div>
			<div className={styles.navbar__item}>
				<NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
			</div>
		</nav >
		<FriendsContainer store={props.store} />
	</div>
}

export default Navbar;
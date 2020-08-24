import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={styles.header}>
		<img src="https://abali.ru/wp-content/uploads/2017/10/smeshariki-cvet.png"></img>
		<div className={styles.login}>
			{props.authed ? props.login :
				<NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
}

export default Header;